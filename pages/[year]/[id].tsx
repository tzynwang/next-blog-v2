import React from 'react';
import { getPostsYearAndTitle, getTitleById, getContentById } from '@Lib/post';
import type { SinglePostPageProps, StaticPropsParams } from './types';

export default function SinglePostPage(props: SinglePostPageProps) {
  /* States */
  const { postTitle, postContent } = props;

  /* Main */
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
  /* States */
  const allPostsYearAndTitle = getPostsYearAndTitle();
  const paths = allPostsYearAndTitle.map((paths) => ({
    params: { year: paths.date, id: paths.id },
  }));

  /* Main */
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: StaticPropsParams) {
  /* States */
  const postTitle = getTitleById(params.id);
  const postContent = getContentById(params.id);

  /* Main */
  return {
    props: {
      postTitle,
      postContent,
    },
  };
}
