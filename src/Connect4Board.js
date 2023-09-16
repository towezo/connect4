import React from 'react';
import Connect4Cell from './Connect4Cell';

const Connect4Board = ({ board, handleCellClick }) => {

  return (
    <div className=" flex rounded-md justify-center bg-blue-500 p-4 shadow-2xl shadow-black">
      <div className="grid grid-cols-7 gap-2 ">
        {board.map((row, rowIndex) => (
          row.map((cell, colIndex) => (
            <Connect4Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onClick={() => handleCellClick(colIndex)} />
          ))
        ))}
      </div>
    </div>
  
  
  );
};

export default Connect4Board;
