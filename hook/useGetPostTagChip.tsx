import { useMemo } from 'react';
import PostTagChip from '@Component/Common/PostTagChip';

export default function useGetPostTagChip(tags: string[]) {
  /* Views */
  const Chips = useMemo(
    () =>
      tags.map((tag, index) => (
        <PostTagChip key={index} label={tag} color="default" />
      )),
    [tags.toString()]
  );

  /* Main */
  return Chips;
}
