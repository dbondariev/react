import React from 'react';

const NumbersList = ({ numbers }) => (
  <ul>
    {numbers.map(num => (
      <li key={num}>{num}</li>
    ))}
  </ul>
);

export default NumbersList;
