// @flow

import type { EffectParams } from 'redux-effex';
import errorHandler from 'app/effects/error';

import { Types, Creators } from 'app/actions';

export async function loadedAsync ( { dispatch }: EffectParams ) {
  dispatch( Creators.fetchPosts() );
}

export default [
  {
    action: Types.LOADED,
    effect: loadedAsync,
    error: errorHandler
  }
];
