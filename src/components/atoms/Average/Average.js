import React from 'react';
import { Wrapper } from './Average.styles';

const Average = ({ average }) => (
  <Wrapper value={average}>
    <span>{average}</span>
  </Wrapper>
);

export default Average;
