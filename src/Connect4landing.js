import React, { useState } from 'react';
import NameInputPopup from './NameInputPopup';

function Connect4Landing({ onStartGame }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleStartGame = () => {
    setShowPopup(true);
  };

  return (
    <div className="bg-gradient-to-b from-pink-200 via-purple-300 to-blue-300 min-h-screen w-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Welcome to Connect 4
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Play the classic Connect 4 game and challenge your friends!
        </p>
        <div className="flex justify-center">
          <button
            className="w-48 h-12 bg-cyan-600 hover:bg-slate-700 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500"
            onClick={handleStartGame}
          >
            Start Game
          </button>
        </div>
      </div>

      {showPopup && (
        <NameInputPopup
          onClose={() => setShowPopup(false)}
          onSubmit={(player1Name, player2Name) => onStartGame(player1Name, player2Name)}
        />
      )}
    </div>
  );
}

export default Connect4Landing;
