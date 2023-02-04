import React, { memo } from 'react';
import CategoryList from '@Component/Common/CategoryList';
import ContentListLayout from '@Component/Layout/ContentList';
import PostListContainer from '@Component/Layout/PostListContainer';
import useGetCategoryPair from '@Hook/useGetCategoryPair';
import useGetPostList from '@Hook/useGetPostList';
import { getPostsList } from '@Lib/post';
import type { TechPostIdTitleDateYearCategoryContents } from '@Model/GeneralTypes';

interface CategoryName {
  categoryName: string;
}

interface CategoryPageProps extends CategoryName {
  allPosts: TechPostIdTitleDateYearCategoryContents;
}

interface StaticPropsParams {
  params: CategoryName;
}

export async function getStaticPaths() {
  const allPosts = getPostsList();
  const allCategories = Array.from(
    new Set(allPosts.map((post) => post.category).flat(2))
  );
  const paths = allCategories.map((categoryName) => ({
    params: { categoryName },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: StaticPropsParams) {
  const { categoryName } = params;
  const allPosts = getPostsList();
  return { props: { allPosts, categoryName } };
}

function CategoryPage(props: CategoryPageProps): React.ReactElement {
  /* States */
  const { allPosts, categoryName } = props;
  const PostsList = useGetPostList(
    allPosts.filter((post) => post.category.includes(categoryName))
  );
  const CategoryPairs = useGetCategoryPair(allPosts);

  /* Main */
  return (
    <ContentListLayout
      side={<CategoryList categories={CategoryPairs} />}
      main={<PostListContainer>{PostsList}</PostListContainer>}
    />
  );
}

export default memo(CategoryPage);
