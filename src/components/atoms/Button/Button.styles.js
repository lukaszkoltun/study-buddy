import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 22px;
  height: 22px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 20px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 51%;
    height: 51%;
  }
`;
