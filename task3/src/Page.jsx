import React from 'react';
import Message from './Message';

class Page extends React.Component {
  state = {
    text: null,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: '',
  //   };
  // }

  setText = text => {
    this.setState({
      text,
    });
  };

  render() {
    return (
      <>
        <button className="btn" onClick={() => this.setText('Hello, world!')}>
          Hello text
        </button>
        <button className="btn" onClick={() => this.setText('Another exciting text.')}>
          Another text
        </button>
        <button className="btn" onClick={() => this.setText(null)}>
          Reset text
        </button>
        <Message text={this.state.text} />
      </>
    );
  }
}

export default Page;
