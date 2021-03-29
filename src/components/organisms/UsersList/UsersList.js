import React from 'react';
import { users } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersLitsItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles.js';

const UserList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, i) => (
        <UsersListItem index={i} key={userData.name} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UserList;
