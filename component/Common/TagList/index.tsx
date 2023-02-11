import React, { memo, useMemo } from 'react';
import cn from 'classnames';
import useGetPostTagChip from '@Hook/useGetPostTagChip';
import scopedStyles from './index.module.css';
import type { TagListProps } from './types';

function TagList(props: TagListProps): React.ReactElement {
  /* States */
  const { tags } = props;

  /* Data */
  const tagNames = useMemo(
    () => tags.map(({ tagName }) => tagName),
    [JSON.stringify(tags)]
  );
  const tagChips = useGetPostTagChip(tagNames);
  const tagPairs = useMemo(() => {
    const nameAndCountPair: React.ReactNode[] = [];
    tagChips.forEach((tag, index) => {
      nameAndCountPair.push(
        <div className={cn(scopedStyles.item)}>
          {tag}
          <span>{tags[index].count}</span>
        </div>
      );
    });
    return nameAndCountPair;
  }, [JSON.stringify(tags)]);

  /* Main */
  return (
    <div className={cn(scopedStyles.container)}>
      {tagPairs.map((pair, index) => (
        <React.Fragment key={index}>{pair}</React.Fragment>
      ))}
    </div>
  );
}

export default memo(TagList);
