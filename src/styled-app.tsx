import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { MiscColor1 } from './misc-color';
import { logoTheme } from './theme';

export const StyledApp = styled.div`
  display: inline-block;
  font-family: ${({ theme }) : string => theme.typography.fontFamily};
  width: 100%;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export const StyledStory = ({ children } : { children : React.ReactNode }) => (
  <ThemeProvider theme={logoTheme}>
    <StyledApp>{children}</StyledApp>
    <MiscColor1 fontSize='200px' />
  </ThemeProvider>
);
