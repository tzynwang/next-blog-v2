import type {
  TagCountPairs,
  TechPostIdDateYearTags,
} from '@Model/GeneralTypes';

export default function useGetTagPair(
  posts: TechPostIdDateYearTags
): TagCountPairs {
  const allTags = posts.map(({ tag }) => tag).flat(2);
  const allTagsUnique = Array.from(new Set(allTags)).sort();
  return allTagsUnique.map((tagName) => ({
    tagName,
    count: allTags.filter((tag) => tag === tagName).length,
  }));
}
