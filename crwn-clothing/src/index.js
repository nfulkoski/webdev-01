import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App.js';

import store from './Redux/store.js'


ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
    document.getElementById('root'));

/*
Learning
- Wrapping our app component in BrowserRouter imparts functionality of React Router to the App
*/
