import test from 'ava';
import configureStore from 'redux-mock-store';
import { effectsMiddleware } from 'redux-effex';
import nock from 'nock';

import Settings from 'app/config/settings';

import effects, { fetchPostsAsync } from 'app/effects/post';
import { Types, Creators } from 'app/actions';

const mockStore = configureStore( [
  effectsMiddleware( effects )
] );

test('Test loadedAsync', async t => {
  const EXPECTED = [
    {
      type: Types.RECEIVE_POSTS,
      posts: [
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ]
    }
  ];

  nock( `${Settings.api_url}` )
    .get('/posts')
    .reply(200, {
      data: EXPECTED[0].posts
    });

  const store = mockStore({});
  await fetchPostsAsync({ dispatch: store.dispatch });

  t.deepEqual(
    EXPECTED,
    store.getActions()
  );
} );
