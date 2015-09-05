import React from 'react';
import AdminApp from './AdminApp.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import { create } from '../../shared/redux';

const store = create(reducers);

export default class App {
  render() {
    return (
      <Provider redux={store}>
        {() => <AdminApp />}
      </Provider>
    );
  }
}
