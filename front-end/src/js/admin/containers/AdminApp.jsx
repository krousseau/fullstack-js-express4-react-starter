'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import UserList from '../components/UserList.jsx';
import * as AdminActions from '../actions/AdminActions.js';

@connect(state => ({
  users: state.users
}))
export default class AdminApp {
  render() {
    const { users, dispatch } = this.props;
    return (
      <UserList users={users} {...bindActionCreators(AdminActions, dispatch)} />
    );
  }
}
