import React, { memo } from 'react';
import Link from 'next/link';
import Chip from '@mui/material/Chip';
import useUrlPath from '@Hook/useUrlPath';
import type { PostCategoryChipProps } from './types';

function PostCategoryChip(props: PostCategoryChipProps): React.ReactElement {
  /* States */
  const { label: category, ...muiChipRestProps } = props;
  const paths = useUrlPath();

  /* Main */
  return (
    <Chip
      label={
        <Link href={`${paths.techBlogCategory}/${category}`}>{category}</Link>
      }
      {...muiChipRestProps}
    />
  );
}

export default memo(PostCategoryChip);
