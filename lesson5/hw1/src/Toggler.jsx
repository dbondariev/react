import React from 'react';

export default class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
  }

  onToggleButton(e) {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  }

  render() {
    return (
      <button className="toggler" onClick={e => this.onToggleButton(e)}>
        {!this.state.isToggleOn ? 'Off' : 'On'}
      </button>
    );
  }
}
