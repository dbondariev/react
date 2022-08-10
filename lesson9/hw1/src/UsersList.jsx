import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends React.Component {
  state = {
    value: '',
  };

  handleNameChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { users } = this.props;
    const { value } = this.state;

    const filterNameList =
      this.state.value === ''
        ? users
        : users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()));
    return (
      <div>
        <Filter count={filterNameList.length} onChange={this.handleNameChange} filterText={value} />
        <ul className="users">
          {filterNameList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
