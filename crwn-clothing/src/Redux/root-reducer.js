import { combineReducers } from 'redux';

import userReducer from './user-reducer.js'

export default combineReducers({

  user: userReducer

});


/*
Learning

This will be the base reducer that represents all of the (redux-handled) state of our application
*/
