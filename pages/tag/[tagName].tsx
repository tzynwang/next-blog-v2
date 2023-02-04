import React, { memo } from 'react';
import TagList from '@Component/Common/TagList';
import ContentListLayout from '@Component/Layout/ContentList';
import PostListContainer from '@Component/Layout/PostListContainer';
import useGetTagPair from '@Hook/useGetTagPair';
import useGetPostList from '@Hook/useGetPostList';
import { getPostsList } from '@Lib/post';
import type { TechPostIdTitleDateYearTagContents } from '@Model/GeneralTypes';

interface TagName {
  tagName: string;
}

interface TagPageProps extends TagName {
  allPosts: TechPostIdTitleDateYearTagContents;
}

interface StaticPropsParams {
  params: TagName;
}

export async function getStaticPaths() {
  const allPosts = getPostsList();
  const allTags = Array.from(new Set(allPosts.map(({ tag }) => tag).flat(2)));
  const paths = allTags.map((tagName) => ({
    params: { tagName },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: StaticPropsParams) {
  const { tagName } = params;
  const allPosts = getPostsList();
  return { props: { allPosts, tagName } };
}

function TagPage(props: TagPageProps): React.ReactElement {
  /* States */
  const { allPosts, tagName } = props;
  const PostsList = useGetPostList(
    allPosts.filter((post) => post.tag.includes(tagName))
  );
  const TagPairs = useGetTagPair(allPosts);

  /* Main */
  return (
    <ContentListLayout
      side={<TagList tags={TagPairs} />}
      main={<PostListContainer>{PostsList}</PostListContainer>}
    />
  );
}

export default memo(TagPage);
