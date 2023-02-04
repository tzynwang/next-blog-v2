import { makeStyles } from '@mui/styles';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Chip from './components/Chip';

export const t = createTheme();

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h1: {
      padding: '1.25rem 0',
      fontSize: '3.5rem',
    },
    h2: {
      padding: '1rem 0',
      fontSize: '2.75rem',
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 300,
    },
    h4: {
      fontSize: '1.75rem',
      paddingBottom: '0.5rem',
    },
  },
  components: {
    ...Chip(t),
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
};
