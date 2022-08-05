import React from 'react';

export default class Mailbox extends React.Component {
  render() {
    return (
      <p className="mailbox__text">
        Messages
        {this.props.unreadMessages.length > 0 && (
          <span className="mailbox__count">{this.props.unreadMessages}</span>
        )}
      </p>
    );
  }
}
