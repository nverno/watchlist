import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { loadChromeOptions } from './util/chrome';
import configureStore from './store/store';

import App from './components/App';
import './index.scss';

// BEGIN testing
import * as search from './actions/search_actions';
// END testing

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};

  // loading from chrome storage will trigger reducers instead
  if (!loadChromeOptions() && localStorage.stocks) {
    preloadedState = {
      ...preloadedState,
      entities: {
        stocks: JSON.parse(localStorage.getItem('stocks')),
        keys: JSON.parse(localStorage.getItem('keys')),
      },
    };
  }

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

  // BEGIN testing
  window.store = store;
  window.search = search;
  // END testing
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
