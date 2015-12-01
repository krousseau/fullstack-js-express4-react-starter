import React, {Component, PropTypes} from 'react';
import User from './User.jsx';

export default class UserList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { users } = this.props;

    return (
      <section id="main">
        <h2>Users</h2>
        <ul className="user-list">
          {users.map(user =>
            <User key={user.id} user={user} />
          )}
        </ul>
      </section>
    );
  }
}
