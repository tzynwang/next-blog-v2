import React, { memo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import theme, { CssVarsProvider, CacheProvider, cache } from '@Style/mui/index';
import type { MuiThemeProviderProps } from './types';

function MuiThemeProvider(props: MuiThemeProviderProps) {
  /* States */
  const { children } = props;

  /* Main */
  return (
    <React.Fragment>
      <CssBaseline />
      <CacheProvider value={cache}>
        <CssVarsProvider theme={theme} defaultMode="dark">
          {children}
        </CssVarsProvider>
      </CacheProvider>
    </React.Fragment>
  );
}

export default memo(MuiThemeProvider);
