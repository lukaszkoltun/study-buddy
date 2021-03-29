import React from 'react';
import PropTypes from 'prop-types';
import { users } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersLitsItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles.js';

const UserList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UserList;
