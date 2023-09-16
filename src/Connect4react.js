import React, { useState } from 'react';
import Connect4Board from './Connect4Board';
import WinnerPopup from './WinnerPopup';
import Connect4TopBoard from './Connect4TopBoard';
import Player from './Player';

function Connect4react({ onQuitGame, player1Name, player2Name }) {
  const initialBoard = Array.from({ length: 6 }, () => Array(7).fill(null));
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('red'); // Use 'red' or 'yellow' based on the current player
  const [winner, setWinner] = useState(null);
  const [showWinnerPopup, setShowWinnerPopup] = useState(false);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);

  const [winners, setWinners] = useState(() => {
    const top5Winners = JSON.parse(localStorage.getItem('winners')) || [];
    return top5Winners;
  });
  
  const handleCellClick = (colIndex) => {
    // Create a deep copy of the board to avoid mutating state directly
    const updatedBoard = board.map((row) => [...row]);
  
    // Find the lowest available row for the clicked column
    let rowIndex = -1; // Initialize with an invalid value
  
    for (let i = 5; i >= 0; i--) {
      if (!updatedBoard[i][colIndex]) {
        rowIndex = i;
        break;
      }
    }
  
    if (rowIndex !== -1) {
      updatedBoard[rowIndex][colIndex] = currentPlayer;
      
      // Check for a win or a draw here (you'll need to implement this logic)
      const winnerName = checkWinner(updatedBoard, currentPlayer, rowIndex, colIndex);
  
      if (winnerName) {
        // If there's a winner, set the winner and show the popup
        setWinner(winnerName);
        setShowWinnerPopup(true);


      } else {
        // Otherwise, continue the game
        setBoard(updatedBoard);
        // Switch to the next player
        setCurrentPlayer(currentPlayer === 'red' ? 'yellow' : 'red');
      }
    }
  };
  
  const checkWinner = (board, currentPlayer, row, col) => {
    // Check horizontally
    const horizontal = () => {
      for (let c = 0; c <= 3; c++) {
        if (
          board[row][col - c] === currentPlayer &&
          board[row][col - c + 1] === currentPlayer &&
          board[row][col - c + 2] === currentPlayer &&
          board[row][col - c + 3] === currentPlayer
        ) {
          return true;
        }
      }
      return false;
    };
  
    // Check vertically
    const vertical = () => {
        for (let r = 0; r <= 2; r++) {
          // Check if the current row and the next three rows are within the valid range
          if (
            row - r >= 0 &&
            row - r + 3 < 6 && // Assuming your board has 6 rows
            board[row - r][col] === currentPlayer &&
            board[row - r + 1][col] === currentPlayer &&
            board[row - r + 2][col] === currentPlayer &&
            board[row - r + 3][col] === currentPlayer
          ) {
            return true;
          }
        }
        return false;
      };
  
    // Check diagonally (bottom-left to top-right)
    const diagonalBottomLeftToTopRight = () => {
        for (let d = -3; d <= 0; d++) {
          if (
            row - d >= 0 && row - d < 6 && // Check if row - d is a valid index (assuming your board has 6 rows)
            col - d >= 0 && col - d < 7 && // Check if col - d is a valid index (assuming your board has 7 columns)
            board[row - d][col - d] === currentPlayer &&
            row - d - 1 >= 0 && row - d - 1 < 6 && // Check if row - d - 1 is a valid index
            col - d - 1 >= 0 && col - d - 1 < 7 && // Check if col - d - 1 is a valid index
            board[row - d - 1][col - d - 1] === currentPlayer &&
            row - d - 2 >= 0 && row - d - 2 < 6 && // Check if row - d - 2 is a valid index
            col - d - 2 >= 0 && col - d - 2 < 7 && // Check if col - d - 2 is a valid index
            board[row - d - 2][col - d - 2] === currentPlayer &&
            row - d - 3 >= 0 && row - d - 3 < 6 && // Check if row - d - 3 is a valid index
            col - d - 3 >= 0 && col - d - 3 < 7 && // Check if col - d - 3 is a valid index
            board[row - d - 3][col - d - 3] === currentPlayer
          ) {
            return true;
          }
        }
        return false;
      };
      
    // Check diagonally (bottom-right to top-left)
    const diagonalBottomRightToTopLeft = () => {
        for (let d = -3; d <= 0; d++) {
          if (
            row - d >= 0 && row - d < 6 && // Check if row - d is a valid index (assuming your board has 6 rows)
            col + d >= 0 && col + d < 7 && // Check if col + d is a valid index (assuming your board has 7 columns)
            board[row - d][col + d] === currentPlayer &&
            row - d - 1 >= 0 && row - d - 1 < 6 && // Check if row - d - 1 is a valid index
            col + d + 1 >= 0 && col + d + 1 < 7 && // Check if col + d + 1 is a valid index
            board[row - d - 1][col + d + 1] === currentPlayer &&
            row - d - 2 >= 0 && row - d - 2 < 6 && // Check if row - d - 2 is a valid index
            col + d + 2 >= 0 && col + d + 2 < 7 && // Check if col + d + 2 is a valid index
            board[row - d - 2][col + d + 2] === currentPlayer &&
            row - d - 3 >= 0 && row - d - 3 < 6 && // Check if row - d - 3 is a valid index
            col + d + 3 >= 0 && col + d + 3 < 7 && // Check if col + d + 3 is a valid index
            board[row - d - 3][col + d + 3] === currentPlayer
          ) {
            return true;
          }
        }
        return false;
      };
      
    // Call the check functions and return true if any of them finds a winner
    if (horizontal() || vertical() || diagonalBottomLeftToTopRight() || diagonalBottomRightToTopLeft()) {
    // Update the win count for the current player
    if (currentPlayer === 'red') {
        setPlayer1Wins(player1Wins + 1);
      } else if (currentPlayer === 'yellow') {
        setPlayer2Wins(player2Wins + 1);
      }
        return currentPlayer;
    }
    // No winner found
    return null;
  };
  
  const handleNewGame = () => {
    // Store the current wins for both players
    const player1WinsBeforeNewGame = player1Wins;
    const player2WinsBeforeNewGame = player2Wins;
  
    // Reset the game by setting the board to its initial state and resetting the currentPlayer
    setBoard(initialBoard);
    setCurrentPlayer('red');
    setWinner(null);
    setShowWinnerPopup(false);
  
    // Update the winners board and get the top 5 winners
    const top5Winners = updateWinnersBoard(winner === 'red' ? player1Name : player2Name, winner === 'red' ? player1Wins : player2Wins);

    // Update the winners state with the top 5 winners
    setWinners(top5Winners);

    // Restore the previous wins for both players
    setPlayer1Wins(player1WinsBeforeNewGame);
    setPlayer2Wins(player2WinsBeforeNewGame);
  };

  const handleQuitGame = () => {
    onQuitGame();
  };

  function updateWinnersBoard(playerName, playerWins) {
    const existingWinners = JSON.parse(localStorage.getItem('winners')) || [];
    
    // Add the new player and wins to the existing winners
    existingWinners.push({ name: playerName, wins: playerWins });
    
    // Sort the winners by wins in descending order
    existingWinners.sort((a, b) => b.wins - a.wins);
    
    // Keep only the top 5 winners
    const top5Winners = existingWinners.slice(0, 5);
    
    // Store the updated winners board in local storage
    localStorage.setItem('winners', JSON.stringify(top5Winners));
    
    return top5Winners;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-slate-600">
   {/* 
    <h1 className="text-2xl font-bold text-white mb-4">Connect 4 </h1>
   */}


    <Connect4TopBoard
          player1Name={player1Name}
          player2Name={player2Name}
          player1Wins={player1Wins}
          player2Wins={player2Wins}
          currentPlayer={currentPlayer}
          winners={winners}
          winner={winner} />

    <div className="flex justify-between w-full px-4">
            {/* Display Player 1 */}
            <div className="flex justify-center items-center w-1/4 pl-4">
                <Player name={player1Name} wins={player1Wins} isCurrentPlayer={currentPlayer === 'red'} />
            </div>
             <Connect4Board board={board} handleCellClick={handleCellClick} />
           {/* Display Player 2 */}
            <div className="flex justify-center items-center w-1/4 pr-4">
                <Player name={player2Name} wins={player2Wins} isCurrentPlayer={currentPlayer === 'yellow'} />
            </div>
      </div>

    <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
            onClick={handleNewGame}>
            New Game
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleQuitGame}>
            Quit Game
          </button>
    </div>

    {showWinnerPopup && (
        <WinnerPopup
        winner={winner}
        player1Name={player1Name}
        player2Name={player2Name}
        onNewGame={handleNewGame}
        onQuitGame={handleQuitGame}
      />
    )}

  </div>
  );
}

export default Connect4react;
