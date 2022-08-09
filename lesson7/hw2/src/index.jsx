import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'First',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Second',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Third',
  },
  {
    id: 'id-3',
    age: 33,
    name: 'Fourth',
  },
  {
    id: 'id-4',
    age: 22,
    name: 'Fifth',
  },
  {
    id: 'id-5',
    age: 56,
    name: 'Sixth',
  },
  {
    id: 'id-6',
    age: 45,
    name: 'Seventh',
  },
  {
    id: 'id-7',
    age: 78,
    name: 'Eighth',
  },
  {
    id: 'id-8',
    age: 13,
    name: 'Ninth',
  },
  {
    id: 'id-9',
    age: 22,
    name: 'Tenth',
  },
  {
    id: 'id-10',
    age: 56,
    name: 'Eleventh',
  },
  {
    id: 'id-11',
    age: 73,
    name: 'Twelveth',
  },
  {
    id: 'id-12',
    age: 24,
    name: 'Thirteenth',
  },
  {
    id: 'id-13',
    age: 28,
    name: 'Fourtennth',
  },
];

ReactDOM.render(<UsersList users={users} itemsPerPage={3} />, rootElement);
