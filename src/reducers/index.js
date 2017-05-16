// @flow

import { combineReducers } from 'redux';
import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { Types } from 'app/actions';

export const APP_STATE = Immutable( {
  loaded: false,
} );

export const POST_STATE = Immutable( {
  posts: []
} );

export default ( state: Object, action: String ) =>
  combineReducers( {
    app: createReducer(
      APP_STATE,
      {
        [ Types.LOADED ]: (state = APP_STATE, action) =>
          state.merge({ loaded: true })
      }
    ),
    post: createReducer(
      POST_STATE,
      {
        [ Types.RECEIVE_POSTS ]: (state = POST_STATE, action) =>
          state.merge({ posts: action.posts })
      }
    )
  } )( state, action );

// Specify any reducer keys that shouldn't persist
export const persistentStoreBlacklist = [];
