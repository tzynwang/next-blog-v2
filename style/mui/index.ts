import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { makeStyles } from '@mui/styles';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
  experimental_extendTheme as createExtendTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import darkColorScheme from './colorSchemes/dark';
import lightColorScheme from './colorSchemes/light';
import Chip from './components/Chip';

export const cache = createCache({
  key: 'normal-reader',
  prepend: true,
});

export const t = createTheme();

const theme = createExtendTheme({
  typography: {
    h1: {
      margin: '1.25rem 0',
      fontSize: '3.5rem',
    },
    h2: {
      margin: '1rem 0',
      fontSize: '2.75rem',
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 300,
    },
    h4: {
      marginBottom: '0.5rem',
      fontSize: '1.75rem',
    },
  },
  components: {
    ...Chip(t),
  },
  colorSchemes: {
    ...darkColorScheme,
    ...lightColorScheme,
  },
});

export default theme;

export {
  ThemeProvider,
  StyledEngineProvider,
  CssVarsProvider,
  useMediaQuery,
  useColorScheme,
  makeStyles,
  CacheProvider,
};
