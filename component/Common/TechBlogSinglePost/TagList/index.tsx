import React, { memo } from 'react';
import cn from 'classnames';
import Typography from '@mui/material/Typography';
import useI18n from '@Hook/useI18n';
import useGetPostTagChip from '@Hook/useGetPostTagChip';
import theme, { useMediaQuery } from '@Theme/index';
import scopedStyles from './index.module.css';
import type { TagListProps } from './types';

function TagList(props: TagListProps): React.ReactElement {
  /* States */
  const { TagLists } = props;
  const i18n = useI18n();
  const PostCategoryChips = useGetPostTagChip(TagLists);
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  /* Main */
  return (
    <div>
      <Typography variant="h4" component="p">
        {i18n.t('frontend.techBlogSinglePost.category')}
      </Typography>
      <ul
        className={cn(
          scopedStyles.tag_container,
          breakpointsUpSm && scopedStyles.tag_container_up_sm
        )}
      >
        {PostCategoryChips.map((chip, index) => (
          <li key={index}>{chip}</li>
        ))}
      </ul>
    </div>
  );
}

export default memo(TagList);
