/* globals localStorage */

import ReduxPersist from '../config/Persist';
import { persistStore } from 'redux-persist';

export default ( store ) => {
  const persistor = persistStore(
    store,
    ReduxPersist.storeConfig,
    () => store.dispatch({ type: 'LOADED' })
  );

  if (localStorage.getItem('reducerVersion') !== ReduxPersist.reducerVersion) {
    persistor.purge();
    localStorage.setItem('reducerVersion', ReduxPersist.reducerVersion);
  }
};
