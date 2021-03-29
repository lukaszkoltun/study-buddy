import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button.js';
import Average from '../../atoms/Average/Average';
import NameAndAttendance from '../../atoms/NameAndAttendance/NameAndAtendance';
import { Wrapper } from './UsersListItem.styles.js';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Average average={average} />
    <NameAndAttendance name={name} attendance={attendance} />
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    atendance: PropTypes.string,
  }),
};

export default UsersListItem;
