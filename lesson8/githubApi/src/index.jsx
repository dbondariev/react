import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import User from './User';

const rootElement = document.querySelector('#root');

ReactDOM.render(<User userId="Github" />, rootElement);
