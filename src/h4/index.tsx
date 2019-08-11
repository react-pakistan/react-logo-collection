import styled, { ThemedStyledProps } from 'styled-components';
import { ITheme } from '../theme';

export const H4 = styled.h4<IH4Props>`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-stretch: normal;
  font-family: ${(props : ThemedStyledProps<IH4Props, ITheme>) : string =>
    props.fontFamily || props.theme.fontFamilyH4};
  font-size: ${(props : ThemedStyledProps<IH4Props, ITheme>) : string =>
    props.fontSize || props.theme.fontSizeH4};
  font-weight: ${(props : ThemedStyledProps<IH4Props, ITheme>) : number =>
    props.fontWeight || props.theme.fontWeightH4};
  line-height: ${(props : ThemedStyledProps<IH4Props, ITheme>) : string =>
    props.lineHeight || props.theme.lineHeightH4};
  letter-spacing: ${(props : ThemedStyledProps<IH4Props, ITheme>) : string =>
    props.letterSpacing || props.theme.letterSpacingH4};
  text-align: ${(props : ThemedStyledProps<IH4Props, ITheme>) : string =>
    props.textAlign || props.theme.textAlignH4};
  text-transform: ${(props : ThemedStyledProps<IH4Props, ITheme>) : string =>
    props.textTransform || props.theme.textTransformH4};
  color: ${(props : ThemedStyledProps<IH4Props, ITheme>) : string =>
    props.color || props.theme.colorH4}
`;

export interface IH4Props {
  /**
   * Font Family property for H1 tag
   * @default Montserrat
   */
  fontFamily : string;
  /**
   * Font Size property for H1 tag
   * @default ThemeH4
   */
  fontSize? : string;
  /**
   * Font Weight property for H1 tag
   * @default ThemeH4
   */
  fontWeight? : number;
  /**
   * Line Height proprty for H1 tag
   * @default ThemeH4
   */
  lineHeight? : string;
  /**
   * Letter Spacing property for H1 tag
   * @default ThemeH4
   */
  letterSpacing? : string;
  /**
   * Text Align property for H1 tag
   * @default ThemeH4
   */
  textAlign? : string;
  /**
   * Text Transform property for H1 tag
   * @default ThemeH4
   */
  textTransform? : string;
  /**
   * Color property for H1 tag
   * @default ThemeH4
   */
  color? : string;
}
