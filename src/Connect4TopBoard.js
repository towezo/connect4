import React from "react";
import Connect4winnerboard from './Connect4winnerboard';

function Connect4TopBoard({ player1Name, player2Name, player1Wins, player2Wins, winners, winner }) {

    return(
    <div className='  h-1/3 '> 
    {/* Winnerboard*/}
    <Connect4winnerboard winners={winners} winner={winner} player1Name={player1Name} player2Name={player2Name} player1Wins={player1Wins} player2Wins={player2Wins} />
  
</div>

);

}

export default Connect4TopBoard;