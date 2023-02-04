import React, { memo } from 'react';
import { getPostsYearAndTitle } from '@Lib/post';
import CategoryList from '@Component/Common/CategoryList';
import ContentListLayout from '@Component/Layout/ContentList';
import PostListContainer from '@Component/Layout/PostListContainer';
import useGetCategoryPair from '@Hook/useGetCategoryPair';
import useGetPostList from '@Hook/useGetPostList';
import type { TechPostIdDateYearCategories } from '@Model/GeneralTypes';

interface ArchivePageProps {
  allPostIdDateCategory: TechPostIdDateYearCategories;
}

function ArchivePage(props: ArchivePageProps): React.ReactElement {
  /* States */
  const { allPostIdDateCategory } = props;
  const PostsList = useGetPostList(allPostIdDateCategory);
  const categoryPairs = useGetCategoryPair(allPostIdDateCategory);

  /* Main */
  return (
    <ContentListLayout
      side={<CategoryList categories={categoryPairs} />}
      main={<PostListContainer>{PostsList}</PostListContainer>}
    />
  );
}

export async function getStaticProps() {
  const allPostIdDateCategory = getPostsYearAndTitle();
  return { props: { allPostIdDateCategory } };
}

export default memo(ArchivePage);
