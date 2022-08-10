import React from 'react';

export default class Message extends React.Component {
  render() {
    return this.props.text ? <div className="message">{this.props.text}</div> : null;
  }
}
