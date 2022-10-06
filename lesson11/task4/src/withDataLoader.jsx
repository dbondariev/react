import React from 'react';
import Spinner from './Spinner.jsx';

export const withDataLoader = (url) => {
  return function (Component) {
    return class extends React.Component {
      state = {
        data: null
      }
      componentDidMount() {
        fetch(url)
          .then((response) => response.json())
          .then((data) => this.setState({ data }));
      }
      render() {
        return this.state.data ? <Component {...this.state} /> : <Spinner />
      }
    };
  };
};
