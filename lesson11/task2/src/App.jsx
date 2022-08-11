import React from 'react';
import Dialog from './Dialog';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show
        </button>
        <Dialog onClose={this.hideDialog} isOpen={this.state.isOpen} title="some title">
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}

export default App;

// <!-- App -->
// <div class="app">
//   <button class="btn">Show dialog</button>
//   <!-- Dialog -->
//   <div class="dialog">
//     <div class="dialog__heading">
//       <h4 class="dialog__title">Recommendation</h4>
//       <button class="dialog__close-btn">+</button>
//     </div>
//     <div class="dialog__content">
//       <!-- Dialog children -->
//       <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
//     </div>
//   </div>
// </div>
