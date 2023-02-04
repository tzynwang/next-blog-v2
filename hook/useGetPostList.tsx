import PostListItem from '@Component/Common/PostListItem';
import type { TechPostIdTitleDateYearCategoryContents } from '@Model/GeneralTypes';

export default function useGetPostList(
  lists: TechPostIdTitleDateYearCategoryContents
) {
  /* Main */
  return lists.map((list, index) => (
    <li key={index}>
      <PostListItem
        postDate={list.date}
        postTitle={list.title}
        postCategories={list.category}
        postUrl={`/${list.year}/${list.id}`}
      />
    </li>
  ));
}
