import React, { memo } from 'react';
import cn from 'classnames';
import scopedStyles from './index.module.css';
import type { PostListContainerProps } from './types';

function PostListContainer(props: PostListContainerProps): React.ReactElement {
  /* States */
  const { children } = props;

  /* Main */
  return (
    <ul className={cn(scopedStyles.PostListItem_container)}>{children}</ul>
  );
}

export default memo(PostListContainer);
