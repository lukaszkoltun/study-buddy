import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  max-width: 500px;
  padding: 30px 30px 6px 30px;
  border-radius: 10px;
  box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.09);
`;
export const StyledList = styled.ul`
  list-style-type: none;
`;
