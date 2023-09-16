import React, {useState} from 'react';
import Connect4react from './Connect4react';
import Connect4landing from './Connect4landing';

function App() {
  const [showGame, setShowGame] = useState(false);
  const [player1Name, setPlayer1Name] = useState('Player 1');
  const [player2Name, setPlayer2Name] = useState('Player 2');

  const handleStartGame = (name1, name2) => {
    setPlayer1Name(name1 || 'Player 1');
    setPlayer2Name(name2 || 'Player 2');
    setShowGame(true);
  };

  const handleQuitGame = () => {
    setShowGame(false); // Set showGame to false to return to the landing page
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {showGame ? (
         <Connect4react onQuitGame={handleQuitGame} player1Name={player1Name} player2Name={player2Name} />
      ) : (
        <Connect4landing onStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;
