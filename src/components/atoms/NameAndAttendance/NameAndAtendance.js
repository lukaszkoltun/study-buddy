import React from 'react';
import { Wrapper, NameParagraph, AttendanceParagraph } from './NameAndAttendance.styles';

const NameAndAttendance = ({name, attendance}) => (
  <Wrapper>
    <NameParagraph>{name}</NameParagraph>
    <AttendanceParagraph>attendance: {attendance}</AttendanceParagraph>
  </Wrapper>
);

export default NameAndAttendance;
