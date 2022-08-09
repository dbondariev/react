import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Comment from './Comment';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl:
    'https://avatars.githubusercontent.com/u/86620950?s=400&u=dca583ceb61723c15069b4e5b210df378a50589d&v=4',
};

ReactDOM.render(<Comment author={userInfo} text="Good job!" date={new Date()} />, rootElement);
