import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [ logger ];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

/*
Learning

Add middleware into our store such that actions can be caught and displayed
Middlewares are just functions that receive actions in, do someting with them, and pass them into the root reducer


*/
