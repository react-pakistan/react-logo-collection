export interface ITheme {
  fontFamily : string;

  fontFamilyH1 : string;
  fontSizeH1 : string;
  fontWeightH1 : number;
  lineHeightH1 : string;
  letterSpacingH1 : string;
  textAlignH1 : string;
  textTransformH1 : string;
  colorH1 : string;

  fontFamilyH2 : string;
  fontSizeH2 : string;
  fontWeightH2 : number;
  lineHeightH2 : string;
  letterSpacingH2 : string;
  textAlignH2 : string;
  textTransformH2 : string;
  colorH2 : string;

  fontFamilyH3 : string;
  fontSizeH3 : string;
  fontWeightH3 : number;
  lineHeightH3 : string;
  letterSpacingH3 : string;
  textAlignH3 : string;
  textTransformH3 : string;
  colorH3 : string;

  fontFamilyH4 : string;
  fontSizeH4 : string;
  fontWeightH4 : number;
  lineHeightH4 : string;
  letterSpacingH4 : string;
  textAlignH4 : string;
  textTransformH4 : string;
  colorH4 : string;

  fontFamilyH5 : string;
  fontSizeH5 : string;
  fontWeightH5 : number;
  lineHeightH5 : string;
  letterSpacingH5 : string;
  textAlignH5 : string;
  textTransformH5 : string;
  colorH5 : string;

  fontFamilyMenuItem : string;
  fontSizeMenuItem : string;
  fontWeightMenuItem : number;
  lineHeightMenuItem : number;
  letterSpacingMenuItem : string;
  textAlignMenuItem : string;
  textTransformMenuItem : string;
  colorMenuItem : string;

  fontFamilyButtonText : string;
  fontSizeButtonText : string;
  fontWeightButtonText : number;
  lineHeightButtonText : number;
  letterSpacingButtonText : string;
  textAlignButtonText : string;
  textTransformButtonText : string;
  colorButtonText : string;

  fontFamilyText : string;
  fontSizeText : string;
  fontWeightText : number;
  lineHeightText : number;
  letterSpacingText : string;
  textAlignText : string;
  textTransformText : string;
  colorText : string;

  buttonBorderRadius : string;
  buttonPadding : string;
  buttonBackgroundColor : string;

  black : string;
  lightBlack : string;
  lighterBlack : string;
  cherryRed : string;
  skyBlue : string;
  rustyGold : string;
  darkGrey : string;
  lightGrey : string;
  paleGreen : string;
  limeYellow : string;
  inputBorder : string;
  white : string;

  // box shadow
  shadow : string;
  shadowMd : string;
}

export const theme : ITheme = {
  fontFamily: `Open Sans, Montserrat, 'PlayFair Display', 'Open Sans', Roboto,
  'Helvetica Neue', Helvetica, Arial, sans-serif`,

  fontFamilyH1: 'Playfair Display',
  fontSizeH1: '2em',
  fontWeightH1: 700,
  lineHeightH1: 'normal',
  letterSpacingH1: '1px',
  textAlignH1: 'center',
  textTransformH1: 'uppercase',
  colorH1: '#2E2E2E',

  fontFamilyH2: 'Montserrat',
  fontSizeH2: '1.8em',
  fontWeightH2: 700,
  lineHeightH2: 'normal',
  letterSpacingH2: '1px',
  textAlignH2: 'center',
  textTransformH2: 'uppercase',
  colorH2: '#2E2E2E',

  fontFamilyH3: 'Montserrat',
  fontSizeH3: '1.6em',
  fontWeightH3: 700,
  lineHeightH3: 'normal',
  letterSpacingH3: '1px',
  textAlignH3: 'center',
  textTransformH3: 'uppercase',
  colorH3: '#2E2E2E',

  fontFamilyH4: 'Montserrat',
  fontSizeH4: '1.4em',
  fontWeightH4: 700,
  lineHeightH4: 'normal',
  letterSpacingH4: '1px',
  textAlignH4: 'center',
  textTransformH4: 'uppercase',
  colorH4: '#2E2E2E',

  fontFamilyH5: 'Montserrat',
  fontSizeH5: '1.2em',
  fontWeightH5: 700,
  lineHeightH5: 'normal',
  letterSpacingH5: '1px',
  textAlignH5: 'center',
  textTransformH5: 'uppercase',
  colorH5: '#2E2E2E',

  fontFamilyMenuItem: 'Open Sans',
  fontSizeMenuItem: '0.7em',
  fontWeightMenuItem: 400,
  lineHeightMenuItem: 0.8,
  letterSpacingMenuItem: '0px',
  textAlignMenuItem: 'left',
  textTransformMenuItem: 'uppercase',
  colorMenuItem: '#2E2E2E',

  fontFamilyButtonText: 'Montserrat',
  fontSizeButtonText: '1em',
  fontWeightButtonText: 700,
  lineHeightButtonText: 1,
  letterSpacingButtonText: 'normal',
  textAlignButtonText: 'center',
  textTransformButtonText: 'uppercase',
  colorButtonText: '#2E2E2E',

  fontFamilyText: 'Montserrat',
  fontSizeText: '1em',
  fontWeightText: 400,
  lineHeightText: 1,
  letterSpacingText: 'normal',
  textAlignText: 'center',
  textTransformText: 'none',
  colorText: '#2E2E2E',

  buttonBorderRadius: '3em',
  buttonPadding: '1em 3.5em',
  buttonBackgroundColor: '#2E2E2E',

  black: '#2E2E2E',
  lightBlack: '#6C6C6C',
  lighterBlack: '#B4B4B4',
  cherryRed: '#F62F5E',
  skyBlue: '#1E90FF',
  rustyGold: '#F1AD3D',
  darkGrey: '#EFEFEF',
  lightGrey: '#F7F7F7',
  paleGreen: '#00D3CA',
  limeYellow: '#EFFC90',
  inputBorder: '#E1E1E1',
  white: '#FFFFFF',

  shadow: '0px 1px 4px #E5E9F2',
  shadowMd: '-4px 0 12px rgba(0, 0, 0, 0.3)',
};

export const Space = {
  x1: '4px',
  x2: '8px',
  x3: '12px',
  x4: '16px',
  x5: '20px',
  x6: '24px',
};

export const zIndex = {
  dropdown: 100,
  pageFooter: 200,
  modal: 300,
};
