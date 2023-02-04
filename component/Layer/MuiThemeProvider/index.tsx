import React, { memo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import theme, {
  ThemeProvider,
  StyledEngineProvider,
  CssVarsProvider,
} from '@Theme/index';
import type { MuiThemeProviderProps } from './types';

function MuiThemeProvider(props: MuiThemeProviderProps) {
  /* States */
  const { children } = props;

  /* Main */
  return (
    <React.Fragment>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <CssVarsProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CssVarsProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
}

export default memo(MuiThemeProvider);
