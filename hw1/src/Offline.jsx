import React from 'react';

export default class Offline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="status">
        <span className="status__text">Offline</span>
        <button className="status__btn">Reconnect</button>
      </div>
    );
  }
}
