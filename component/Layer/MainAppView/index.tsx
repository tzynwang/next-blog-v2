import React, { memo } from 'react';
import Footer from '@Component/Common/Footer';
import Nav from '@Component/Common/Nav';
import type { MainAppViewProps } from './types';

function MainAppView(props: MainAppViewProps) {
  /* States */
  const { children } = props;

  /* Main */
  return (
    <React.Fragment>
      <Nav />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default memo(MainAppView);
