import { combineReducers } from 'redux';

import AppReducer from 'app/reducers/app';
import PostReducer from 'app/reducers/post';

const allReducers = combineReducers({
  app: AppReducer,
  post: PostReducer
});

export default (state, action) => {
  return allReducers(state, action);
};

// Specify any reducer keys that shouldn't persist
export const persistentStoreBlacklist = [];
