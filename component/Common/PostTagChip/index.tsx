import React, { memo } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Chip from '@mui/material/Chip';
import useUrlPath from '@Hook/useUrlPath';
import scopedStyles from './index.module.css';
import type { PostTagChipProps } from './types';

function PostTagChip(props: PostTagChipProps): React.ReactElement {
  /* States */
  const { label: tag, ...muiChipRestProps } = props;
  const paths = useUrlPath();

  /* Main */
  return (
    <Chip
      label={<Link href={`${paths.techBlogTag}/${tag}`}>{tag}</Link>}
      className={cn(scopedStyles.chip_link)}
      {...muiChipRestProps}
    />
  );
}

export default memo(PostTagChip);
