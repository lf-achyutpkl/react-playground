import React from 'react';

const DropDown = ({ options, abc }) => {
  return (
    <select onChange={(e) => abc(e.target.value)}>
      {
        options && options.map(option => <option key={option} value={option}>{option}</option>)
      }
    </select>
  )  
};

export default DropDown;
