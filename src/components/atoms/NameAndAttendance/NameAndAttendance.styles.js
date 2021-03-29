import styled from 'styled-components';

export const Wrapper = styled.div`
margin-left: 24px;
margin-right: 10px;
p {
  color: ${({ theme }) => theme.colors.darkGrey};
}
`;

export const NameParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
`;

export const AttendanceParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
`;
