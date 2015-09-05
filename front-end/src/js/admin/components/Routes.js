import React from 'react';
import {Route} from 'react-router';
import App from 'components/App.jsx';
import Home from 'components/Home.jsx';
import Users from 'components/UserList.jsx';


export default (
  <Route component={App}>
    <Route path="/" component={Home}/>
    <Route path="/users" component={Users}/>
  </Route>
);
