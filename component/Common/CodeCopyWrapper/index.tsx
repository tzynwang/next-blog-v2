import React, { memo, useRef, useState, useEffect } from 'react';
import cn from 'classnames';
import IconButton from '@mui/material/IconButton';
import CopyIcon from '@Asset/content_copy_black_24dp.svg';
import useCopyToClipboard from '@Hook/useCopyToClipboard';
import scopedStyles from './index.module.css';
import type { CodeProps } from './types';

function CodeCopyWrapper(props: CodeProps): React.ReactElement {
  /* States */
  const { children } = props;
  const { handleCopy } = useCopyToClipboard();
  const wrapperRef = useRef<null | HTMLDivElement>(null);
  const [code, setCode] = useState<string>('');

  /* Hooks */
  useEffect(() => {
    if (wrapperRef.current) {
      setCode(wrapperRef.current.innerText);
    }
  }, [wrapperRef.current]);

  /* Main */
  return (
    <div className={cn(scopedStyles.wrapper)} ref={wrapperRef}>
      {children}
      <IconButton
        aria-label="copy code snippet content"
        className={cn(scopedStyles.copy_button)}
        onClick={() => handleCopy(code)}
      >
        <CopyIcon
          className={cn(scopedStyles.svgFill)}
          width="18"
          height="18"
          viewBox="0 0 24 24"
        />
      </IconButton>
    </div>
  );
}

export default memo(CodeCopyWrapper);
