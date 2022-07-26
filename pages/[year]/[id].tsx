import React from 'react';
import { getPostsYearAndTitle, getTitleById, getContentById } from '@Lib/post';

export default function SinglePostPage({
  postTitle,
  postContent,
}: {
  postTitle: string;
  postContent: string;
}) {
  return (
    <React.Fragment>
      <h1 className="text-3xl my-3">{postTitle}</h1>
      <div
        className="postContentWrapper"
        dangerouslySetInnerHTML={{ __html: postContent }}
      />
    </React.Fragment>
  );
}

export async function getStaticPaths() {
  const allPostsYearAndTitle = getPostsYearAndTitle();
  const paths = allPostsYearAndTitle.map((paths) => ({
    params: { year: paths.date, id: paths.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { year: string; id: string };
}) {
  const postTitle = getTitleById(params.id);
  const postContent = getContentById(params.id);
  return {
    props: {
      postTitle,
      postContent,
    },
  };
}
