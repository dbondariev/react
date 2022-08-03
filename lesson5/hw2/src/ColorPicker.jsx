import React from 'react';

// const CORAL = '#ff7f50';
// const AQUA = '#00FFFF';
// const BISQUE = '#F2D2BD';

export default class ColorPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      colorName: '',
    };
  }
  btnHovered = colorName => {
    this.setState({
      colorName: colorName,
    });
  };
  btnUnhovered = () => {
    this.setState({
      colorName: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.btnHovered('Coral')}
            onMouseLeave={() => this.btnUnhovered()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.btnHovered('Aqua')}
            onMouseLeave={() => this.btnUnhovered()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.btnHovered('Bisque')}
            onMouseLeave={() => this.btnUnhovered()}
          ></button>
        </div>
      </div>
    );
  }
}
