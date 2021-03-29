import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: stretch;
  position: relative;
  padding: 33px 0 24px 0;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 1px;
    background-color: lightgray;
  }
`;
