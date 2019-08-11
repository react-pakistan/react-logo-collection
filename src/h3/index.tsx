import styled, { ThemedStyledProps } from 'styled-components';
import { ITheme } from '../theme';

export const H3 = styled.h3<IH3Props>`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-stretch: normal;
  font-family: ${(props : ThemedStyledProps<IH3Props, ITheme>) : string =>
    props.fontFamily || props.theme.fontFamilyH3};
  font-size: ${(props : ThemedStyledProps<IH3Props, ITheme>) : string =>
    props.fontSize || props.theme.fontSizeH3};
  font-weight: ${(props : ThemedStyledProps<IH3Props, ITheme>) : number =>
    props.fontWeight || props.theme.fontWeightH3};
  line-height: ${(props : ThemedStyledProps<IH3Props, ITheme>) : string =>
    props.lineHeight || props.theme.lineHeightH3};
  letter-spacing: ${(props : ThemedStyledProps<IH3Props, ITheme>) : string =>
    props.letterSpacing || props.theme.letterSpacingH3};
  text-align: ${(props : ThemedStyledProps<IH3Props, ITheme>) : string =>
    props.textAlign || props.theme.textAlignH3};
  text-transform: ${(props : ThemedStyledProps<IH3Props, ITheme>) : string =>
    props.textTransform || props.theme.textTransformH3};
  color: ${(props : ThemedStyledProps<IH3Props, ITheme>) : string =>
    props.color || props.theme.colorH3}
`;

export interface IH3Props {
  /**
   * Font Family property for H1 tag
   * @default Montserrat
   */
  fontFamily : string;
  /**
   * Font Size property for H1 tag
   * @default ThemeH3
   */
  fontSize? : string;
  /**
   * Font Weight property for H1 tag
   * @default ThemeH3
   */
  fontWeight? : number;
  /**
   * Line Height proprty for H1 tag
   * @default ThemeH3
   */
  lineHeight? : string;
  /**
   * Letter Spacing property for H1 tag
   * @default ThemeH3
   */
  letterSpacing? : string;
  /**
   * Text Align property for H1 tag
   * @default ThemeH3
   */
  textAlign? : string;
  /**
   * Text Transform property for H1 tag
   * @default ThemeH3
   */
  textTransform? : string;
  /**
   * Color property for H1 tag
   * @default ThemeH3
   */
  color? : string;
}
