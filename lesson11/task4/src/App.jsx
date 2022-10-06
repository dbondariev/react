import React from 'react';
import User from './User.jsx';
import City from './City.jsx';
import { withDataLoader } from './withDataLoader.jsx';

const MyCity = withDataLoader(
  'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities/1'
)(City);

const SuperUser = withDataLoader('https://api.github.com/users/octocat')(User);

const App = () => (
  <div className='page'>
    <MyCity />
    <SuperUser />
  </div>
);

export default App;
