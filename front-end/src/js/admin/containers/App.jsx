'use strict';

import React from 'react';
import AdminApp from './AdminApp.jsx';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

const redux = createRedux(stores);

export default class App {
  render() {
    return (
      <Provider redux={redux}>
        {() => <AdminApp />}
      </Provider>
    );
  }
}
