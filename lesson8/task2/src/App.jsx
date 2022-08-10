import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
    };
  }

  onToggle = () => {
    this.setState({
      visable: !this.state.visable,
    });
  };

  render() {
    return (
      <>
        <button className="btn logout" onClick={this.onToggle}>
          Success
        </button>
        {this.state.visable && <Clock location="New York" offset={-5} />}
        {this.state.visable && <Clock location="London" offset={0} />}
        {this.state.visable && <Clock location="Kyiv" offset={2} />}
      </>
    );
  }
}

export default App;
