import React, { memo } from 'react';
import type { H1TitleProps } from './types';

function H1Title(props: H1TitleProps): React.ReactElement {
  const { children } = props;
  return (
    <div
      style={{
        fontSize: '1.75rem',
        fontWeight: 700,
        textDecoration: 'underline',
        color: 'pink',
      }}
    >
      {children}
    </div>
  );
}

export default memo(H1Title);
