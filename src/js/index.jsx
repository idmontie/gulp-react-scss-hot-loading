import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App from './components/app.jsx';
import SingleTodo from './components/todos/single.jsx';

import todoReducer from './reducers/todo';
import uiReducer from './reducers/ui';

let createStoreDebuggable = createStore;

if (DEBUG) {
  if (window.devToolsExtension) {
    createStoreDebuggable = window.devToolsExtension()(createStore);
  }
}

const store = createStoreDebuggable(
  combineReducers({
    todos: todoReducer,
    ui: uiReducer,
    routing: routerReducer,
  })
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/todos/:id" component={SingleTodo} />
    </Router>
  </Provider>,
  document.getElementById('react-target')
);

if (DEBUG) {
  require('../../dist/styles/main.css');
}
