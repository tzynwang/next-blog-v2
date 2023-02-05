import React, { memo } from 'react';
import cn from 'classnames';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import ExpandLessIcon from '@Asset/expand_less_black_24dp.svg';
import useMuiThemeStyle from '@Hook/useMuiThemeStyle';
import useShouldShowFab from '@Hook/useShouldShowFab';

function BackToTop(): React.ReactElement {
  /* States */
  const muiThemeStyles = useMuiThemeStyle();
  const shouldShowFab = useShouldShowFab();

  /* Functions */
  const backToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* Main */
  return (
    <Zoom in={shouldShowFab}>
      <Fab
        aria-label="back-to-page-top"
        className={cn(muiThemeStyles.fabPosition)}
        color="primary"
        size="medium"
        onClick={backToTop}
      >
        <ExpandLessIcon />
      </Fab>
    </Zoom>
  );
}

export default memo(BackToTop);
