import React, { memo } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Typography from '@mui/material/Typography';
import useGetPostCategoryChip from '@Hook/useGetPostCategoryChip';
import theme, { useMediaQuery } from '@Theme/index';
import scopedStyles from './index.module.css';
import type { PostListItemProps } from './types';

function PostListItem(props: PostListItemProps): React.ReactElement {
  /* States */
  const { postDate, postTitle, postCategories, postUrl } = props;
  const PostCategoryChips = useGetPostCategoryChip(postCategories);
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  /* Main */
  return (
    <div className={cn(scopedStyles.container)}>
      <Typography variant="body1">{postDate}</Typography>
      <Link href={postUrl}>
        <Typography variant="body1">{postTitle}</Typography>
      </Link>
      <div
        className={cn(
          scopedStyles.category_container,
          breakpointsUpSm && scopedStyles.category_container_up_sm
        )}
      >
        {PostCategoryChips}
      </div>
    </div>
  );
}

export default memo(PostListItem);
