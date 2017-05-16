// @flow

import React from 'react';
import { connect } from 'react-redux';

import Posts from 'app/containers/posts';

class App extends React.Component {
  props: {
    loaded: Boolean
  };

  render () {
    const { loaded } = this.props;

    if (!loaded) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <Posts />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loaded: state.app.loaded
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
