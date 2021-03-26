import React from 'react';
import PropTypes from 'prop-types';
import { users } from 'data/users.js';
import UsersListItem from 'components/UsersLitsItem/UsersListItem';

const UserList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UserList;
