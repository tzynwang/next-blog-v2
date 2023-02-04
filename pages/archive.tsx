import React, { memo } from 'react';
import TagList from '@Component/Common/TagList';
import ContentListLayout from '@Component/Layout/ContentList';
import PostListContainer from '@Component/Layout/PostListContainer';
import useGetTagPair from '@Hook/useGetTagPair';
import useGetPostList from '@Hook/useGetPostList';
import { getPostsList } from '@Lib/post';
import type { TechPostIdTitleDateYearTagContents } from '@Model/GeneralTypes';

interface ArchivePageProps {
  allPostIdDateTag: TechPostIdTitleDateYearTagContents;
}

function ArchivePage(props: ArchivePageProps): React.ReactElement {
  /* States */
  const { allPostIdDateTag } = props;
  const PostsList = useGetPostList(allPostIdDateTag);
  const tagPairs = useGetTagPair(allPostIdDateTag);

  /* Main */
  return (
    <ContentListLayout
      side={<TagList tags={tagPairs} />}
      main={<PostListContainer>{PostsList}</PostListContainer>}
    />
  );
}

export async function getStaticProps() {
  const allPostIdDateTag = getPostsList();
  return { props: { allPostIdDateTag } };
}

export default memo(ArchivePage);
