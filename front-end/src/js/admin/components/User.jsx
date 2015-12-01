import React, {Component, PropTypes} from 'react';

export default class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { user } = this.props;
    return (
      <li>
          <span>Email: {user.email}</span>
          <span>UserId: {user.id}</span>
      </li>
    );
  }
}
