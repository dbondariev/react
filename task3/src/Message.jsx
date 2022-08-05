import React from 'react';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.text ? <div className="message">{this.props.text}</div> : null;
  }
}
