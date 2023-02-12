import type { CssVarsThemeOptions } from '@mui/material/styles';

const lightColorScheme: CssVarsThemeOptions['colorSchemes'] = {
  light: {
    palette: {
      primary: {
        main: '#6d4ea2',
      },
      secondary: {
        main: '#635b70',
      },
      text: {
        primary: '#1d1b1e',
      },
      error: {
        main: '#ba1a1a',
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
      divider: '#7a757f',
      background: {
        default: '#fffbff',
        paper: '#fffbff',
      },
    },
  },
};

export default lightColorScheme;
