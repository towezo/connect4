import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

function WinnerPopup({ winner, player1Name, player2Name, onNewGame, onQuitGame }) {
  return (
    <div className="grid gap-4 p-4 bg-gray-500 bg-opacity-70 w-1/2 h-1/2 rounded shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
         <FontAwesomeIcon icon={faTrophy} className="text-pink-400" />
      <div className="flex justify-center text-xl font-semibold">{winner === 'red' ? player1Name : player2Name} wins!</div>
      <div className='flex justify-center'>
    </div>

      <div className="flex justify-center">
        <button
          className="flex-initial w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
          onClick={onNewGame}>
          New Game
        </button>
        <button
          className="flex-initial w-32 h-12 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onQuitGame}>
          Quit Game
        </button>
      </div>
    </div>
  );
}

export default WinnerPopup;
