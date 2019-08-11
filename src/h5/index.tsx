import styled, { ThemedStyledProps } from 'styled-components';
import { ITheme } from '../theme';

export const H5 = styled.h5<IH5Props>`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-stretch: normal;
  font-family: ${(props : ThemedStyledProps<IH5Props, ITheme>) : string =>
    props.fontFamily || props.theme.fontFamilyH5};
  font-size: ${(props : ThemedStyledProps<IH5Props, ITheme>) : string =>
    props.fontSize || props.theme.fontSizeH5};
  font-weight: ${(props : ThemedStyledProps<IH5Props, ITheme>) : number =>
    props.fontWeight || props.theme.fontWeightH5};
  line-height: ${(props : ThemedStyledProps<IH5Props, ITheme>) : string =>
    props.lineHeight || props.theme.lineHeightH5};
  letter-spacing: ${(props : ThemedStyledProps<IH5Props, ITheme>) : string =>
    props.letterSpacing || props.theme.letterSpacingH5};
  text-align: ${(props : ThemedStyledProps<IH5Props, ITheme>) : string =>
    props.textAlign || props.theme.textAlignH5};
  text-transform: ${(props : ThemedStyledProps<IH5Props, ITheme>) : string =>
    props.textTransform || props.theme.textTransformH5};
  color: ${(props : ThemedStyledProps<IH5Props, ITheme>) : string =>
    props.color || props.theme.colorH5}
`;

export interface IH5Props {
  /**
   * Font Family property for H1 tag
   * @default Montserrat
   */
  fontFamily : string;
  /**
   * Font Size property for H1 tag
   * @default ThemeH5
   */
  fontSize? : string;
  /**
   * Font Weight property for H1 tag
   * @default ThemeH5
   */
  fontWeight? : number;
  /**
   * Line Height proprty for H1 tag
   * @default ThemeH5
   */
  lineHeight? : string;
  /**
   * Letter Spacing property for H1 tag
   * @default ThemeH5
   */
  letterSpacing? : string;
  /**
   * Text Align property for H1 tag
   * @default ThemeH5
   */
  textAlign? : string;
  /**
   * Text Transform property for H1 tag
   * @default ThemeH5
   */
  textTransform? : string;
  /**
   * Color property for H1 tag
   * @default ThemeH5
   */
  color? : string;
}
