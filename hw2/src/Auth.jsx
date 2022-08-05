import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isLoading: false,
    };
  }

  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  loginHandler = () => {
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ isLoading: false }), 2000);
    setTimeout(() => this.setState({ isLoggedIn: true }), 2000);
  };

  condition = () => {
    if (!this.state.isLoading && !this.state.isLoggedIn) {
      return <Login onLogin={() => this.loginHandler()} />;
    } else if (this.state.isLoading) {
      return <Spinner size={2600} />;
    } else if (this.state.isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }
  };

  render() {
    return this.condition();
  }
}
// {
//   this.state.isLoggedIn ? (
//     <Logout onLogout={this.logoutHandler} />
//   ) : (
//     <Login onLogin={this.loginHandler} />
//   );
// }
