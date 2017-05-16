import test from 'ava';
import configureStore from 'redux-mock-store';
import { effectsMiddleware } from 'redux-effex';

import Settings from 'app/config/settings';

import effects, { loadedAsync } from 'app/effects/app';
import { Types, Creators } from 'app/actions';

const mockStore = configureStore( [
  effectsMiddleware( effects )
] );

test('loadedAsync', async t => {
  const EXPECTED = [
    {
      type: Types.FETCH_POSTS
    }
  ];

  const store = mockStore({});
  await loadedAsync({ dispatch: store.dispatch });

  t.deepEqual(
    EXPECTED,
    store.getActions()
  );
} );
