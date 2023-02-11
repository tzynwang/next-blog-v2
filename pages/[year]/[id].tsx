import React, { memo, useMemo } from 'react';
import cn from 'classnames';

import { allTechPosts } from '@contentlayer/generated/index';
import { useMDXComponent } from 'next-contentlayer/hooks';

import Typography from '@mui/material/Typography';
import TableOfContent from '@Component/Common/TechBlogSinglePost/TableOfContent';
import SeriesPost from '@Component/Common/TechBlogSinglePost/SeriesPost';
import TagList from '@Component/Common/TechBlogSinglePost/TagList';
import TechBlogSinglePostLayout from '@Component/Layout/TechBlogSinglePost';
import {
  getPostsList,
  getTitleById,
  getTagById,
  getTocById,
  getContentById,
  test_getContentByMdx,
} from '@Lib/post';
import theme, { useMediaQuery } from '@Theme/index';
import scopedStyles from './index.module.css';
import type { SinglePostPageProps, StaticPropsParams } from './types';

function TechBlogSinglePostPage(props: SinglePostPageProps) {
  /* States */
  const {
    postTitle,
    postToc,
    postTag,
    postSeries,
    /* postContent, */
    /* contentLayerPostContent, */
    contentMdx,
  } = props;
  const breakpointsUpMd = useMediaQuery(theme.breakpoints.up('md'));
  /* const MDXContent = contentLayerPostContent ? (
    useMDXComponent(contentLayerPostContent.body.code)
  ) : (
    <React.Fragment />
  ); */
  const MDXContent = useMDXComponent(contentMdx);

  /* Data */
  const toc = useMemo(
    () =>
      postToc.map(({ text, depth }) => ({
        to: `#${text}`,
        postSubTitle: text,
        depth,
      })),
    [postToc]
  );

  /* Views */
  const TableOfContents = useMemo(
    () =>
      breakpointsUpMd ? (
        <TableOfContent tableOfContents={toc} />
      ) : (
        <React.Fragment />
      ),
    [breakpointsUpMd, toc.toString()]
  );
  const SeriesPosts = useMemo(
    () =>
      postSeries.length ? (
        <SeriesPost seriesPosts={postSeries} />
      ) : (
        <React.Fragment />
      ),
    [postSeries.toString()]
  );
  const TagLists = useMemo(
    () => <TagList TagLists={postTag} />,
    [postTag.toString()]
  );
  const PostTitle = useMemo(
    () => (
      <Typography variant="h2" className={cn(scopedStyles.post_title)}>
        {postTitle}
      </Typography>
    ),
    [postTitle]
  );

  /* const Main = (
    <div className="techBlogSinglePostPage_content_wrapper">
      {PostTitle}
      <div
        className={cn(breakpointsUpMd && scopedStyles.main_wrapper_up_md)}
        dangerouslySetInnerHTML={{ __html: postContent }}
      />
    </div>
  ); */

  /* Main */
  return (
    <TechBlogSinglePostLayout
      side={
        <div className={scopedStyles.side_wrapper}>
          {TableOfContents}
          {SeriesPosts}
          {TagLists}
        </div>
      }
      main={
        <div className="techBlogSinglePostPage_content_wrapper">
          {PostTitle}
          <MDXContent />
        </div>
      }
    />
  );
}

export async function getStaticPaths() {
  /* States */
  const allPosts = getPostsList();
  const paths = allPosts.map(({ year, id }) => ({
    params: { year, id },
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
  const postTag = getTagById(params.id);
  const postToc = getTocById(params.id);

  const contentLayerPostContent = allTechPosts.find(
    (p) => p._raw.flattenedPath === params.id
  );
  const contentMdx = await test_getContentByMdx(params.id);

  /* Main */
  return {
    props: {
      postTitle,
      postContent,
      postTag,
      postToc,
      postSeries: [], // TODO: 取每一篇文章的系列文資訊
      contentLayerPostContent,
      contentMdx: contentMdx.toString(),
    },
  };
}

export default memo(TechBlogSinglePostPage);
