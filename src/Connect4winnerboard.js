import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';


function Connect4Winnerboard({ winners }) {
    return (
      <div className="flex flex-col items-center bg-gradient-to-r from-yellow-200 to-blue-200 rounded-lg p-4 shadow-md">
        <h2 className="text-2xl text-gray-800 font-semibold mb-2">
                <div className="bg-white rounded-full p-2 mr-2">
                  <FontAwesomeIcon icon={faTrophy} className="  text-yellow-400 " /> Winner's Board
                </div>
        </h2>

        <ul className="text-gray-800">
          {winners.map((winner, index) => (
            <li key={index}
              className="mb-2 flex items-center justify-between w-full">
              <div className="grid grid-cols-2 gap-5">
                <p className="text-lg">{winner.name}</p>
                <p className="text-lg font-semibold">{winner.wins} Points</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Connect4Winnerboard;
  