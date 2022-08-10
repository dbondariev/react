import React from 'react';
import UsersList from './UsersList.jsx';

const users = [
  { id: 0, name: 'Sara', age: 40 },
  { id: 1, name: 'Tom', age: 17 },
  { id: 2, name: 'Michael', age: 28 },
  { id: 3, name: 'Sara', age: 28 },
  { id: 4, name: 'Samantha', age: 11 },
];

const App = () => <UsersList users={users} />;

export default App;
