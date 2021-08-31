import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [ logger ];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

/*
Learning

Add middleware into our store such that actions can be caught and displayed
Middlewares are just functions that receive actions in, do someting with them, and pass them into the root reducer


*/
