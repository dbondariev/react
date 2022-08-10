import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName="Johm"
    lastName="Doe"
    birthDate={new Date('2001-01-01T11:11:11.819Z')}
  />,
  rootElement,
);
