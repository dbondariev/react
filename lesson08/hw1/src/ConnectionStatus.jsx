import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true,
    };
  }

  Toggle = e => {
    const { onLine } = e.target.navigator;
    this.setState({
      online: onLine,
    });
  };

  componentDidMount() {
    window.addEventListener('online', this.Toggle);
    window.addEventListener('offline', this.Toggle);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.Toggle);
    window.removeEventListener('offline', this.Toggle);
  }

  render() {
    return (
      <>
        {this.state.online ? (
          <div className="status">online</div>
        ) : (
          <div className="status status_offline">offline</div>
        )}
      </>
    );
  }
}

export default ConnectionStatus;
