// @flow

import React from 'react';
import PropTypes from 'prop-types';

export type PostType = {
  id: Number,
  title: String,
  body: String
};

export default class Post extends React.Component {
  props: {
    post: PostType
  };

  render () {
    const { post } = this.props;

    return (
      <div className='col-md-12'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            {post.id}: {post.title}
          </div>
          <div className='panel-body'>
            {post.body}
          </div>
        </div>
      </div>
    );
  }
}
