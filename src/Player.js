import React from 'react';
import './player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';

function Player({ name, wins, isCurrentPlayer }) {
  return (
    
    <div className="bg-gradient-to-r from-pink-200 to-blue-200 p-4 rounded-lg border border-gray-300 shadow-md">
   
      <div className={`p-4 ${isCurrentPlayer ? 'bg-slate-500 bg-opacity-70' : ''} rounded-lg`}>
        <div className="flex flex-col  justify-center items-center border-solid border-2 border-gray-400 rounded-lg p-4">
            
       
                        <div className='flex justify-center items-center flex-col'>
                            <div className="bg-white rounded-full p-2 mb-2">    
                                <FontAwesomeIcon icon={faUser} className="text-pink-400" />
                            </div>
                            <p className="text-xl font-semibold text-gray-800">{name}</p>
                            <p className="text-lg text-gray-600">Wins: {wins}</p>
                        </div>
           

        </div>
      </div>
    </div>
  );
}

export default Player;
