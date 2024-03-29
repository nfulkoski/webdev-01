import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import App from './App.js';

import { store, persistor } from './Redux/store.js'



ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
      <PersistGate persistor = { persistor }>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  ,
    document.getElementById('root'));

/*
Learning
- Wrapping our app component in BrowserRouter imparts functionality of React Router to the App
*/
