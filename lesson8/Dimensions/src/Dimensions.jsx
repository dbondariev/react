import React from 'react';

class Dimensions extends React.Component {
  constructor() {
    super();

    this.state = {
      height: null,
      width: null,
    };
  }

  onRiseze = e => {
    const { innerHeight, innerWidth } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  componentDidMount() {
    window.addEventListener('resize', this.onRiseze);
    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onRiseze);
  }

  setDimensions = (width, height) => {
    this.setState({
      height: height,
      width: width,
    });
    document.title = `${width} x ${height}`;
  };
  render() {
    return (
      <div className="dimensions">
        {this.state.width}px - {this.state.height}px
      </div>
    );
  }
}

export default Dimensions;
