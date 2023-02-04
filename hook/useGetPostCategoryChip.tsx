import { useMemo } from 'react';
import PostCategoryChip from '@Component/Common/PostCategoryChip';

export default function useGetPostCategoryChip(categories: string[]) {
  /* Views */
  const Chips = useMemo(
    () =>
      categories.map((category, index) => (
        <PostCategoryChip key={index} label={category} color="primary" />
      )),
    [categories.toString()]
  );

  /* Main */
  return Chips;
}
