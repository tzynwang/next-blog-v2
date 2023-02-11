import React, { memo } from 'react';
import MainAppView from '@Component/Layer/MainAppView';
import MuiThemeProvider from '@Component/Layer/MuiThemeProvider';
import '@Style/css/globals.css';
import '@Style/css/highlightJs.css';
import type { AppProps } from 'next/app';

function AppEntry(AppEntryProps: AppProps): React.ReactElement {
  /* States */
  const { Component, pageProps } = AppEntryProps;

  /* Main */
  return (
    <MuiThemeProvider>
      <MainAppView>
        <Component {...pageProps} />
      </MainAppView>
    </MuiThemeProvider>
  );
}

export default memo(AppEntry);
