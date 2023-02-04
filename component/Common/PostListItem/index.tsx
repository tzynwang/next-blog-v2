import React, { memo } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Typography from '@mui/material/Typography';
import useGetPostTagChip from '@Hook/useGetPostTagChip';
import theme, { useMediaQuery } from '@Theme/index';
import scopedStyles from './index.module.css';
import type { PostListItemProps } from './types';

function PostListItem(props: PostListItemProps): React.ReactElement {
  /* States */
  const { postDate, postTitle, postTags, postUrl } = props;
  const PostTagChips = useGetPostTagChip(postTags);
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  /* Main */
  return (
    <div
      className={cn(
        scopedStyles.container,
        breakpointsUpSm && scopedStyles.tag_container_up_sm
      )}
    >
      <Typography variant="body1">{postDate}</Typography>
      <Link href={postUrl}>
        <Typography variant="body1">{postTitle}</Typography>
      </Link>
      <div
        className={cn(
          scopedStyles.tag_container,
          breakpointsUpSm && scopedStyles.tag_container_up_sm
        )}
      >
        {PostTagChips}
      </div>
    </div>
  );
}

export default memo(PostListItem);
