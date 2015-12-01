import React from 'react';
import { createStore, applyMiddleware, bindActionCreators, compose } from 'redux';
import thunk from 'redux-thunk';
import AdminApp from './AdminApp.jsx';
import { Provider } from 'react-redux';
import masterReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension : f => f
)(createStore);
const store = finalCreateStore(masterReducer);

export default class App {
  render() {
    return (
      <Provider store={store}>
        {() => <AdminApp />}
      </Provider>
    );
  }
}
