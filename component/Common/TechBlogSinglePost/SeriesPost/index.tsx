import React, { memo } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Typography from '@mui/material/Typography';
import useI18n from '@Hook/useI18n';
import scopedStyles from './index.module.css';
import type { SeriesPostsProps } from './types';

function SeriesPosts(props: SeriesPostsProps): React.ReactElement {
  /* States */
  const { seriesPosts } = props;
  const i18n = useI18n();

  /* Main */
  return (
    <div>
      <Typography variant="h4" component="p">
        {i18n.t('frontend.techBlogSinglePost.seriesPost')}
      </Typography>
      <ul className={cn(scopedStyles.posts_container)}>
        {seriesPosts.map((post, index) => (
          <li key={index}>
            <Link href={post.postUrl}>{post.postTitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(SeriesPosts);
