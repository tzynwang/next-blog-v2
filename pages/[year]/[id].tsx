import React, { memo, useMemo } from 'react';
import cn from 'classnames';
import Typography from '@mui/material/Typography';
import TableOfContent from '@Component/Common/TechBlogSinglePost/TableOfContent';
import SeriesPost from '@Component/Common/TechBlogSinglePost/SeriesPost';
import TagList from '@Component/Common/TechBlogSinglePost/TagList';
import TechBlogSinglePostLayout from '@Component/Layout/TechBlogSinglePost';
import {
  getPostsList,
  getTitleById,
  getDateById,
  getTagById,
  getTocById,
  getContentById,
} from '@Lib/post';
import theme, { useMediaQuery } from '@Style/mui/index';
import scopedStyles from './index.module.css';
import type { SinglePostPageProps, StaticPropsParams } from './types';

function TechBlogSinglePostPage(props: SinglePostPageProps) {
  /* States */
  const { postTitle, postDate, postTag, postToc, postSeries, postContent } =
    props;
  const breakpointsUpMd = useMediaQuery(theme.breakpoints.up('md'));

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
          {postDate}
          <div
            className={cn(breakpointsUpMd && scopedStyles.main_wrapper_up_md)}
            dangerouslySetInnerHTML={{ __html: postContent }}
          />
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
  const postDate = getDateById(params.id);
  const postTag = getTagById(params.id);
  const postToc = getTocById(params.id);

  /* Main */
  return {
    props: {
      postTitle,
      postDate,
      postTag,
      postContent,
      postToc,
      postSeries: [], // TODO: 取每一篇文章的系列文資訊
    },
  };
}

export default memo(TechBlogSinglePostPage);
