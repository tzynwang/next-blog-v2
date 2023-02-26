import React, { memo } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Typography from '@mui/material/Typography';
import useGetPostTagChip from '@Hook/useGetPostTagChip';
import scopedStyles from './index.module.css';
import type { PostCardProps } from './types';

function PostCard(props: PostCardProps): React.ReactElement {
  /* States */
  const { coverImage, postTitle, postDate, postCategories, postUrl, summary } =
    props;
  const PostTagChips = useGetPostTagChip(postCategories);

  /* Main */
  return (
    <div className={scopedStyles.container}>
      <div className={scopedStyles.card}>
        <div
          className={cn(scopedStyles.post_image)}
          style={{
            backgroundImage: `url(${coverImage})`,
          }}
        />
        <div className={scopedStyles.post_text}>
          <Link href={postUrl}>
            <Typography variant="h3">{postTitle}</Typography>
          </Link>
          <Typography variant="body1" className={cn(scopedStyles.post_date)}>
            {postDate}
          </Typography>
          <div className={cn(scopedStyles.tag_container)}>{PostTagChips}</div>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </div>
    </div>
  );
}

export default memo(PostCard);
