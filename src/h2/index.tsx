import styled, { ThemedStyledProps } from 'styled-components';
import { ITheme } from '../theme';

export const H2 = styled.h2<IH2Props>`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-stretch: normal;
  font-family: ${(props : ThemedStyledProps<IH2Props, ITheme>) : string =>
    props.fontFamily || props.theme.fontFamilyH2};
  font-size: ${(props : ThemedStyledProps<IH2Props, ITheme>) : string =>
    props.fontSize || props.theme.fontSizeH2};
  font-weight: ${(props : ThemedStyledProps<IH2Props, ITheme>) : number =>
    props.fontWeight || props.theme.fontWeightH2};
  line-height: ${(props : ThemedStyledProps<IH2Props, ITheme>) : string =>
    props.lineHeight || props.theme.lineHeightH2};
  letter-spacing: ${(props : ThemedStyledProps<IH2Props, ITheme>) : string =>
    props.letterSpacing || props.theme.letterSpacingH2};
  text-align: ${(props : ThemedStyledProps<IH2Props, ITheme>) : string =>
    props.textAlign || props.theme.textAlignH2};
  text-transform: ${(props : ThemedStyledProps<IH2Props, ITheme>) : string =>
    props.textTransform || props.theme.textTransformH2};
  color: ${(props : ThemedStyledProps<IH2Props, ITheme>) : string =>
    props.color || props.theme.colorH2}
`;

export interface IH2Props {
  /**
   * Font Family property for H1 tag
   * @default Montserrat
   */
  fontFamily : string;
  /**
   * Font Size property for H1 tag
   * @default ThemeH2
   */
  fontSize? : string;
  /**
   * Font Weight property for H1 tag
   * @default ThemeH2
   */
  fontWeight? : number;
  /**
   * Line Height proprty for H1 tag
   * @default ThemeH2
   */
  lineHeight? : string;
  /**
   * Letter Spacing property for H1 tag
   * @default ThemeH2
   */
  letterSpacing? : string;
  /**
   * Text Align property for H1 tag
   * @default ThemeH2
   */
  textAlign? : string;
  /**
   * Text Transform property for H1 tag
   * @default ThemeH2
   */
  textTransform? : string;
  /**
   * Color property for H1 tag
   * @default ThemeH2
   */
  color? : string;
}
