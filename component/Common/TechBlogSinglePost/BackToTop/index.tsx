import React, { memo } from 'react';
import cn from 'classnames';
import ButtonBase from '@mui/material/ButtonBase';
import Zoom from '@mui/material/Zoom';
import ExpandLessIcon from '@Asset/expand_less_black_24dp.svg';
import useShouldShowFab from '@Hook/useShouldShowFab';
import theme, { useMediaQuery } from '@Style/mui/index';
import scopedStyles from './index.module.css';

function BackToTop(): React.ReactElement {
  /* States */
  const shouldShowFab = useShouldShowFab();
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  /* Functions */
  const backToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* Main */
  return (
    <Zoom in={shouldShowFab}>
      <ButtonBase
        aria-label="back-to-page-top"
        className={cn(
          scopedStyles.fab_base_style,
          scopedStyles.fab_position,
          breakpointsUpSm && scopedStyles.fab_position_up_sm
        )}
        onClick={backToTop}
      >
        <ExpandLessIcon className={cn(scopedStyles.fab_svg_fill)} />
      </ButtonBase>
    </Zoom>
  );
}

export default memo(BackToTop);
