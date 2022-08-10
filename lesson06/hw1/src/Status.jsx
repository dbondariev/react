import React from 'react';
import Offline from './Offline';
import Online from './Online';

class Status extends React.Component {
  state = {
    isOnline: true,
    isOffline: false,
  };

  render() {
    return (
      <>
        {this.state.isOnline && <Online />} {!this.state.isOffline && <Offline />}
      </>
    );
  }
}

export default Status;
