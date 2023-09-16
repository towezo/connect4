import React from 'react';
import PropTypes from 'prop-types';

const Connect4Cell = ({ value, onClick }) => {
  return (
    <div className={`bg-white h-16  w-16 border rounded-full  border-gray-500 flex items-center justify-center cursor-pointer`}
      onClick={onClick}>
      {value !== null && (
        <div className={`w-10 h-10 rounded-full ${ value === 'red' ? 'bg-red-500' : 'bg-yellow-500'  }`} ></div>
      )}
    </div>
  );
};

Connect4Cell.propTypes = {
  value: PropTypes.oneOf(['red', 'yellow', null]),
  onClick: PropTypes.func.isRequired,
};

export default Connect4Cell;
