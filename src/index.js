import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './stores/configureStore'

import seedData from './data/seed.js'

import App from './App';
import './index.css';

const store = configureStore({list: seedData(), displayLength: 10, filter: 'none'})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
