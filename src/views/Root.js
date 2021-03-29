import React from 'react';
import PropTypes from 'prop-types';
import UserList from 'components/organisms/UsersList/UsersList';
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { theme } from 'assets/styles/theme.js';
import { Wrapper } from './Root.styles.js';
import { format } from 'prettier';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UserList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
