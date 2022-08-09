import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
    };
  }

  goPrevHandler = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNextHandler = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { itemsPerPage } = this.props;
    const { currentPage } = this.state;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
      <div>
        <Pagination
          goPrev={this.goPrevHandler}
          goNext={this.goNextHandler}
          totalItems={this.props.users.length}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {this.props.users.slice(startIndex, endIndex).map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
