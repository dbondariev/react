import React from 'react';
import Clock from './Clock';

export default props => (
  <>
    <Clock location="New York" offset={-4} />
    <Clock location="London" offset={1} />
    <Clock location="Kyiv" offset={3} />
  </>
);
