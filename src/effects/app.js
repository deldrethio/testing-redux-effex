// @flow

import type { EffectParams } from 'redux-effex';
import errorHandler from 'app/effects/error';

import { Types, Creators } from 'app/actions';

async function loadedAync ({ action, dispatch, getState }: EffectParams) {
  dispatch(Creators.fetchPosts());
}

export default [
  {
    action: Types.LOADED,
    effect: loadedAync,
    error: errorHandler
  }
];
