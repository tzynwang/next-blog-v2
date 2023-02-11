import React, { memo, useMemo } from 'react';
import cn from 'classnames';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import usePageSecondTitle from '@Hook/usePageSecondTitle';
import theme, { useMediaQuery } from '@Style/mui/index';
import scopedStyles from './index.module.css';
import type { PostListProps } from './types';

function ContentList(props: PostListProps): React.ReactElement {
  /* States */
  const { side, main } = props;
  const breakpointsUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const secondTitle = usePageSecondTitle();

  /* Views */
  const SecondTitle = useMemo(
    () =>
      secondTitle ? (
        <Typography variant="h2">{secondTitle}</Typography>
      ) : (
        <React.Fragment />
      ),
    [secondTitle]
  );

  /* Main */
  return (
    <Container>
      {SecondTitle}
      <div
        className={cn(
          breakpointsUpMd
            ? scopedStyles.PostList_container_up_md
            : scopedStyles.PostList_container
        )}
      >
        <section>{side}</section>
        <section>{main}</section>
      </div>
    </Container>
  );
}

export default memo(ContentList);
