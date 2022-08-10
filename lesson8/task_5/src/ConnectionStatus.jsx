import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      networkStatus: window.navigator.onLine,
    };
  }

  componentDidMount() {
    window.addEventListener('offline', this.handleNetworkChange);
    window.addEventListener('online', this.handleNetworkChange);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.handleNetworkChange);
    window.removeEventListener('online', this.handleNetworkChange);
  }

  handleNetworkChange = event => {
    this.setState({ networkStatus: event.target.navigator.onLine });
  };

  render() {
    const { networkStatus } = this.state;
    //   if (networkStatus) {
    //     return <div className="status">online</div>;
    //   }
    //   return <div className="status status_offline">offline</div>;
    // }
    return networkStatus ? (
      <div className="status">online</div>
    ) : (
      <div className="status status_offline">offline</div>
    );
  }
}

export default ConnectionStatus;
