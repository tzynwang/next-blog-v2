import PostListItem from '@Component/Common/PostListItem';
import timeFormat from '@Lib/time-format';
import type { TechPostIdDateYearCategories } from '@Model/GeneralTypes';

export default function useGetPostList(lists: TechPostIdDateYearCategories) {
  /* Main */
  return lists.map((list, index) => (
    <li key={index}>
      <PostListItem
        postDate={timeFormat(list.date)}
        postTitle={list.id}
        postCategories={list.category}
        postUrl={`/${list.year}/${list.id}`}
      />
    </li>
  ));
}
