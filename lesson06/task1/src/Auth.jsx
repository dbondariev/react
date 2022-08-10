import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  loginHandler = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.logoutHandler} />
        ) : (
          <Login onLogin={this.loginHandler} />
        )}
      </div>
    );
  }
}
