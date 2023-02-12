import type { CssVarsThemeOptions } from '@mui/material/styles';

const darkColorScheme: CssVarsThemeOptions['colorSchemes'] = {
  dark: {
    palette: {
      primary: {
        main: '#9575cd',
      },
      secondary: {
        main: '#cdc2db',
      },
      text: {
        primary: '#e7e1e5',
      },
      error: {
        main: '#ffb4ab',
      },
      warning: {
        main: '#ffd54f',
      },
      info: {
        main: '#00acc1',
      },
      success: {
        main: '#00e676',
      },
      divider: '#948e99',
      background: {
        default: '#1d1b1e',
        paper: '#1d1b1e',
      },
    },
  },
};

export default darkColorScheme;
