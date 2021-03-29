import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value < 3) return theme.colors.error;
    return theme.colors.gray;
  }};
  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: bold;
  }
`;
