import PostListItem from '@Component/Common/PostListItem';
import type { TechPostIdTitleDateYearTagContents } from '@Model/GeneralTypes';

export default function useGetPostList(
  lists: TechPostIdTitleDateYearTagContents
) {
  /* Main */
  return lists.map((list, index) => (
    <li key={index}>
      <PostListItem
        postDate={list.date}
        postTitle={list.title}
        postTags={list.tag}
        postUrl={`/${list.year}/${list.id}`}
      />
    </li>
  ));
}
