import React, { memo } from 'react';
import cn from 'classnames';
import Container from '@mui/material/Container';
import BackToTop from '@Component/Common/TechBlogSinglePost/BackToTop';
import theme, { useMediaQuery } from '@Theme/index';
import scopedStyles from './index.module.css';
import type { PostListProps } from './types';

function TechBlogSinglePostLayout(props: PostListProps): React.ReactElement {
  /* States */
  const { side, main } = props;
  const breakpointsUpMd = useMediaQuery(theme.breakpoints.up('md'));

  /* Main */
  return (
    <Container>
      <div
        className={cn(
          breakpointsUpMd ? scopedStyles.wrapper_up_md : scopedStyles.wrapper
        )}
      >
        <section>{side}</section>
        <section>{main}</section>
      </div>
      <BackToTop />
    </Container>
  );
}

export default memo(TechBlogSinglePostLayout);
