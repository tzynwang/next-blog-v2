import React, { memo, useMemo } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import cn from 'classnames';
import IconButton from '@mui/material/IconButton';
import CopyIcon from '@Asset/content_copy_black_24dp.svg';
import useCopyToClipboard from '@Hook/useCopyToClipboard';
import scopedStyles from './index.module.css';
import type { CodeProps } from './types';

function Code(props: CodeProps): React.ReactElement {
  /* States */
  const { language = 'javascript', children } = props;
  const { handleCopy } = useCopyToClipboard();

  /* Data */
  const code = useMemo(
    () => children?.toString() || '',
    [children?.toString()]
  );

  /* Main */
  return (
    <div className={cn(scopedStyles.wrapper)}>
      <SyntaxHighlighter
        language={language}
        style={a11yDark}
        showLineNumbers
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
      <IconButton
        aria-label="copy code snippet content"
        className={cn(scopedStyles.copy_button)}
        onClick={() => handleCopy(code)}
      >
        <CopyIcon fill="#fff" width={18} height={18} />
      </IconButton>
    </div>
  );
}

/** props.language 預設為 javascript，若傳入非 js 的內容，請自行指定語言類型 */
export default memo(Code);
