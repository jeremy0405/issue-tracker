export const colors = {
  titleActive: '#14142B',
  body: '#4E4B66',
  label: '#6E7191',
  placeHolder: '#A0A3BD',
  line: '#D9DBE9',
  inputBackground: '#EFF0F6',
  background: '#F7F7FC',
  offWhite: '#FEFEFE',

  primary: {
    blue: '#007AFF',
    lightBlue: '#C7EBFF',
    darkBlue: '#004DE3',
  },
  secondary: {
    purple: '#0025E7',
    lightPurple: '#CCD4FF',
    darkPurple: '#020070',
  },
  error: {
    red: '#FF3B30 ',
    lightRed: '#FFD1CF',
    darkRed: '#C60B00',
  },
  success: {
    green: '#34C759',
    lightGreen: '#DDFFE6',
    darkGreen: '#00A028',
  },
};

const fontStyles = {
  displayRegular: {
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '48px',
  },
  displayBold: {
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '48px',
  },
  textLarge: {
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '40px',
  },
  textMedium: {
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '32px',
  },
  textSmall: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '28px',
  },
  textXSmall: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '20px',
  },
  linkLarge: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '40px',
  },
  linkMedium: {
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '32px',
  },
  linkSmall: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '28px',
  },
  linkXsmall: {
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '20px',
  },
};

const buttonSize = {
  large: { width: '340px', height: '64px' },
  medium: { width: '240px', height: '56px' },
  small: { width: '120px', height: '40px' },
};

const textInputSize = {
  large: { width: '340px', height: '64px' },
  medium: { width: '320px', height: '56px' },
  small: { width: '300px', height: '40px' },
};

const textAreaSize = {
  medium: { width: '340px', height: '220px' },
  large: { width: '880px', height: '343px' },
};

const theme = {
  colors,
  fontStyles,
  buttonSize,
  textInputSize,
  textAreaSize,
};

export default theme;
