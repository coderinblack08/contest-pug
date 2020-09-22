import { theme as chakraTheme } from '@chakra-ui/core';

const fonts = {
  ...chakraTheme.fonts,
  mono: "'Menlo', monospace",
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif',
};

const breakpoints = ['40em', '52em', '64em'];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: '#16161D',
    primary: {
      100: '#E8EFFE',
      200: '#C6D8FC',
      300: '#A4C1FA',
      400: '#6092F6',
      500: '#1C63F2',
      600: '#1959DA',
      700: '#113B91',
      800: '#0D2D6D',
      900: '#081E49',
    },
  },
  fonts,
  breakpoints,
  icons: {
    ...chakraTheme.icons,
  },
};

export default theme;
