import type {
  CategoryCountPairs,
  TechPostIdDateYearCategories,
} from '@Model/GeneralTypes';

export default function useGetCategoryPair(
  posts: TechPostIdDateYearCategories
): CategoryCountPairs {
  const allCategories = posts.map((post) => post.category).flat(2);
  const allCategoriesUnique = Array.from(new Set(allCategories));
  return allCategoriesUnique.map((categoryName) => ({
    categoryName,
    count: allCategories.filter((category) => category === categoryName).length,
  }));
}
