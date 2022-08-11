import React from 'react';

class Expand extends React.Component {
  state = { isOpen: false };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.handleClick}>
            {isOpen ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>}
          </button>
        </div>
        {isOpen ? (
          <div className="expand__content">
            <p>{children}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Expand;
