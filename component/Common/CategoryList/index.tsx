import React, { memo, useMemo } from 'react';
import cn from 'classnames';
import useGetPostCategoryChip from '@Hook/useGetPostCategoryChip';
import scopedStyles from './index.module.css';
import type { CategoryListProps } from './types';

function CategoryList(props: CategoryListProps): React.ReactElement {
  /* States */
  const { categories } = props;

  /* Data */
  const categoryNames = useMemo(
    () => categories.map((category) => category.categoryName),
    [JSON.stringify(categories)]
  );
  const categoryChips = useGetPostCategoryChip(categoryNames);
  const categoryPairs = useMemo(() => {
    const nameAndCountPair: React.ReactNode[] = [];
    categoryChips.forEach((category, index) => {
      nameAndCountPair.push(
        <div className={cn(scopedStyles.item)}>
          {category}
          <span className={cn(scopedStyles.category_count)}>
            {categories[index].count}
          </span>
        </div>
      );
    });
    return nameAndCountPair;
  }, [JSON.stringify(categories)]);

  /* Main */
  return (
    <div className={cn(scopedStyles.container)}>
      {categoryPairs.map((pair, index) => (
        <React.Fragment key={index}>{pair}</React.Fragment>
      ))}
    </div>
  );
}

export default memo(CategoryList);
