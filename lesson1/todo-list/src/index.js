import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// should render following html

//<h1 class="title">Todo List</h1>
const rootElement = document.querySelector('#root');

const elem = <h1 className="title">Todo List</h1>;

ReactDOM.render(elem, rootElement);