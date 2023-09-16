import React, { useState } from 'react';

function NameInputPopup({ onClose, onSubmit }) {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handlePlayer1NameChange = (e) => {
    setPlayer1Name(e.target.value);
  };

  const handlePlayer2NameChange = (e) => {
    setPlayer2Name(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(player1Name, player2Name);
    onClose(); // Close the popup
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60">
      <div className="flex flex-col justify-center bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Enter Player Names</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Player 1 Name"
            value={player1Name}
            onChange={handlePlayer1NameChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Player 2 Name"
            value={player2Name}
            onChange={handlePlayer2NameChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button onClick={handleSubmit}  className="flex flex-initial justify-center items-center px-8 h-12 bg-cyan-600 hover:bg-slate-700 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500">
          Start Game
        </button>
      </div>
    </div>
  );
}

export default NameInputPopup;
