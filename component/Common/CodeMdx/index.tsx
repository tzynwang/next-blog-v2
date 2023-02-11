import React, { memo } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import type { CodeMdxProps } from './types';

function CodeMdx(props: CodeMdxProps): React.ReactElement {
  /* States */
  const { /* className,  */children } = props;

  /* Data */
  // const language = props.className.split('-')[1];

  /* Main */
  return (
    <SyntaxHighlighter /* language={language} */ style={a11yDark}>
      {children}
    </SyntaxHighlighter>
  );
}

export default memo(CodeMdx);
