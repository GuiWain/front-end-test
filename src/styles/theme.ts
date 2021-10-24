export default {
  border: {
    smallRadius: '0.4rem',
    radius: '0.8rem'
  },
  font: {
    family: "'Open Sans', 'Roboto', 'Helvetica Neue', sans-serif",
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    sizes: {
      smaller: '1.0rem',
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2.0rem',
      large: '2.4rem',
      xlarge: '2.8rem',
      xxlarge: '3.2rem',
      xxxlarge: '3.6rem',
      huge: '4.0rem',
      xhuge: '5.6rem'
    }
  },
  colors: {
    primaryLight: '#8802A3',
    primaryMedium: '#510161',
    secondaryLightest: '#fafafa',
    secondaryLight: '#CCC8C8',
    secondaryMedium: '#848080',
    secondaryDark: '#4F4C4C',
    secondaryDarkest: '#2D2A2A',
    infoMedium: '#5663b7',
    infoDark: '#3241A1',
    successLight: '#12af46',
    successMedium: '#00A03E',
    errorLight: '#fb3c1e',
    errorMedium: '#ed3020',
    warningMedium: '#e7de1a',
    warningDark: '#e7b500',
    neutralLightest: '#F5F5F5',
    neutralLight: '#E9E9E9',
    neutralMedium: '#D9D9D9',
    neutralDark: '#9D9D9D',
    white: '#FFFFFF',
    black: '#000000'
  },
  spacings: {
    xxxsmall: '0.5rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: {
    slow: '1s ease-in-out',
    default: '0.5s ease-in-out',
    fast: '0.2s ease-in-out'
  }
} as const
