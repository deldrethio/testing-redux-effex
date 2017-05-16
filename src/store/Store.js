import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import { effectsMiddleware } from 'redux-effex';

import rehydrate from 'app/services/Rehydration';
import rootReducer from 'app/reducers';
import effects from 'app/effects';

let middleware = [];
middleware.push(effectsMiddleware(effects));

export default () => {
  let store = {};

  let enhance = [
    applyMiddleware(...middleware),
    autoRehydrate()
  ];

  const enhancers = compose(...enhance);

  store = createStore(
    rootReducer,
    enhancers
  );

  rehydrate( store );

  return store;
};
