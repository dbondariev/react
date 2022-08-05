import React from 'react';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: Math.sqrt(this.props.size / 2),
    };
  }
  render() {
    return (
      <span
        className="spinner"
        style={{ height: this.state.size, width: this.state.size }}
      ></span>
    );
  }
}

export default Spinner;
