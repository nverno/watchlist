import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { loadSettings } from './util/settings';
import configureStore from './store/store';

import App from './components/App';
import './index.scss';

// BEGIN testing
import * as search from './actions/search_actions';
import * as list from './actions/list_actions';
import * as stocks from './actions/stock_actions';
// import _ from 'lodash';
// import moment from 'moment-timezone';
// END testing

var chrome;

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};

  // loading from chrome storage will trigger reducers instead
  if (!(chrome && chrome.storage)) {
    preloadedState = {
      ...preloadedState,
      entities: {
        // stocks: JSON.parse(localStorage.getItem('stocks')) || {},
        lists: JSON.parse(localStorage.getItem('lists')) || [],
      },
      settings: {
        keys: JSON.parse(localStorage.getItem('keys')) || {},
      },
      ui: JSON.parse(localStorage.getItem('ui')) || {},
    };
  }

  // TODO: if chrome extension, sync settings after store has been
  // initialized
  const store = configureStore(preloadedState);
  const root = document.getElementById('root');

  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    root
  );

  if (process.env.REACT_APP_STANDALONE) {
    document.getElementsByTagName('body')[0].className += 'standalone';
  } else {
    document.getElementsByTagName('body')[0].className += 'chrome-extension';
  }

  // BEGIN testing
  window.store = store;
  window.search = search;
  window.list = list;
  window.stocks = stocks;
  window.loadSettings = loadSettings;
  // window._ = _;
  // window.moment = moment;
  // END testing
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
