// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Post from 'app/components/post';

class Posts extends React.Component {
  props: {
    posts: Array<Post>
  };

  render () {
    const { posts } = this.props;

    if (posts.length === 0) {
      return null;
    }

    const renderPosts = posts.map(post => (
      <Post post={post} key={post.id}/>
    ));

    return (
      <div>
        {renderPosts}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
