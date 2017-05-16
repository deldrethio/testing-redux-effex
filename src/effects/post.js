import type { EffectParams } from 'redux-effex';
import errorHandler from './error';

import { Types, Creators } from 'app/actions';

import Api from 'app/services/api';

export async function fetchPostsAsync ( { dispatch }: EffectParams ) {
  const response = await Api.getPosts();

  if ( response.ok ) {
    dispatch( Creators.receivePosts( response.data.data ) );
  }
}

export default [
  {
    action: Types.FETCH_POSTS,
    effect: fetchPostsAsync,
    error: errorHandler
  }
];
