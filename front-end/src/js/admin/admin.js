import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, bindActionCreators, compose } from 'redux';
import App from './containers/App.jsx';

ReactDOM.render(
  <App/>,
  document.getElementById('react-app')
);
