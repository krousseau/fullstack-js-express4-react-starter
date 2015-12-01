import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserList from '../components/UserList.jsx';
import * as AdminActions from '../actionCreators/AdminActions.js';

function selectState(state) {
  return {
    users: state.users
  };
}

class AdminApp {
  render() {
    const { users, dispatch } = this.props;
    return (
      <UserList users={users} {...bindActionCreators(AdminActions, dispatch)} />
    );
  }
}
export default connect(selectState)(AdminApp);
