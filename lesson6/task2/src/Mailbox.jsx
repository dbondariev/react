import React from 'react';

export default class Mailbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className="mailbox__text">
        Messages
        {this.props.unreadMessages.length > 0 && (
          <span className="mailbox__count">{this.props.unreadMessages.length}</span>
        )}
      </p>
    );
  }
}
