// @flow

import { createActions } from 'reduxsauce';

type ActionTypes = {
  Types: Object,
  Creators: Object
}

export const { Types, Creators }: ActionTypes = createActions({
  loaded: [ 'message' ],
  fetchPosts: null,
  receivePosts: [ 'posts' ]
});
