// tslint:disable typedef

import { ITheme } from '@taimoormk/util-functions';
import * as React from 'react';
import * as styledComponents from 'styled-components';
import { MiscColor1 } from './misc-color';
import { logoTheme } from './theme';

// https://www.styled-components.com/docs/api#define-a-theme-interface
const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider };

export const StyledApp = styled.div`
  display: inline-block;
  font-family: ${props => props.theme.typography.fontFamily};
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

// Due to our `typedef` rule, this type is needed as a helper.
// Actually, by using helpers exported above, styled-components-props
// can be calculated automatically by tsc already.
export type WithTheme<P = {}> = styledComponents.ThemedStyledProps<P, ITheme>;
