import React, { memo } from 'react';
import cn from 'classnames';
import IconButton from '@mui/material/IconButton';
import ModeDarkIcon from '@Asset/dark_mode_black_24dp.svg';
import { useColorScheme } from '@Theme/index';
import scopedStyles from './index.module.css';

function ThemeToggle(): React.ReactElement {
  /* States */
  const { mode, setMode } = useColorScheme();

  /* Functions */
  const handleModeSwitch = (): void => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  /* Main */
  return (
    <IconButton aria-label="toggle site color theme" onClick={handleModeSwitch}>
      <ModeDarkIcon
        className={cn(scopedStyles.svgFill)}
        width={24}
        height={24}
      />
    </IconButton>
  );
}

export default memo(ThemeToggle);
