import React from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

export default class Colors extends React.Component {
  constructor() {
    super();
  }
  setBodyColor = (color, e) => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={() => this.setBodyColor(RED)}
        />
        <button
          className="colors__button"
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBodyColor(GREEN)}
        />
        <button
          className="colors__button"
          style={{ backgroundColor: BLUE }}
          onClick={() => this.setBodyColor(BLUE)}
        />
      </div>
    );
  }
}
