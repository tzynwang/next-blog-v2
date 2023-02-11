import React, { memo } from 'react';
import { MDXProvider } from '@mdx-js/react';
import H1Title from '@Component/Common/H1Title';
import MainAppView from '@Component/Layer/MainAppView';
import MuiThemeProvider from '@Component/Layer/MuiThemeProvider';
import '@Style/globals.css';
import type { AppProps } from 'next/app';

const components = {
  h2: H1Title,
};

function AppEntry(AppEntryProps: AppProps): React.ReactElement {
  /* States */
  const { Component, pageProps } = AppEntryProps;

  /* Main */
  return (
    <MuiThemeProvider>
      <MainAppView>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </MainAppView>
    </MuiThemeProvider>
  );
}

export default memo(AppEntry);
