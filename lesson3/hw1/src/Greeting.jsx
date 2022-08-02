import React from 'react';
import calculateFullYears from './calculateFullYears';

export default props => {
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm {calculateFullYears(props.birthDate)} years
      old
    </div>
  );
};
