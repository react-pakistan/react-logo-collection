import styled, { ThemedStyledProps } from 'styled-components';
import { ITheme } from '../theme';

export const H1 = styled.h1<IH1Props>`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-stretch: normal;
  font-family: ${(props : ThemedStyledProps<IH1Props, ITheme>) : string =>
    props.fontFamily || props.theme.fontFamilyH1};
  font-size: ${(props : ThemedStyledProps<IH1Props, ITheme>) : string =>
    props.fontSize || props.theme.fontSizeH1};
  font-weight: ${(props : ThemedStyledProps<IH1Props, ITheme>) : number =>
    props.fontWeight || props.theme.fontWeightH1};
  line-height: ${(props : ThemedStyledProps<IH1Props, ITheme>) : string =>
    props.lineHeight || props.theme.lineHeightH1};
  letter-spacing: ${(props : ThemedStyledProps<IH1Props, ITheme>) : string =>
    props.letterSpacing || props.theme.letterSpacingH1};
  text-align: ${(props : ThemedStyledProps<IH1Props, ITheme>) : string =>
    props.textAlign || props.theme.textAlignH1};
  text-transform: ${(props : ThemedStyledProps<IH1Props, ITheme>) : string =>
    props.textTransform || props.theme.textTransformH1};
  color: ${(props : ThemedStyledProps<IH1Props, ITheme>) : string =>
    props.color || props.theme.colorH1}
`;

export interface IH1Props {
  /**
   * Font Family property for H1 tag
   * @default PlayfairDisplay
   */
  fontFamily : string;
  /**
   * Font Size property for H1 tag
   * @default ThemeH1
   */
  fontSize? : string;
  /**
   * Font Weight property for H1 tag
   * @default ThemeH1
   */
  fontWeight? : number;
  /**
   * Line Height proprty for H1 tag
   * @default ThemeH1
   */
  lineHeight? : string;
  /**
   * Letter Spacing property for H1 tag
   * @default ThemeH1
   */
  letterSpacing? : string;
  /**
   * Text Align property for H1 tag
   * @default ThemeH1
   */
  textAlign? : string;
  /**
   * Text Transform property for H1 tag
   * @default ThemeH1
   */
  textTransform? : string;
  /**
   * Color property for H1 tag
   * @default ThemeH1
   */
  color? : string;
}
