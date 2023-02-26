import React, { memo } from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PostCard from '@Component/Common/PostCard';
import LatestPost from '@Component/Layout/LatestPost';
import PostListContainer from '@Component/Layout/PostListContainer';
import useGetPostList from '@Hook/useGetPostList';
import useI18n from '@Hook/useI18n';
import { useReplaceToNode } from '@Hook/useStringReplacement';
import useUrlPath from '@Hook/useUrlPath';
import { getPostsList } from '@Lib/post';
import {
  MOCK_COVER_IMAGE,
  LATEST_POST_COUNT_IN_INDEX,
} from '@Model/GeneralModels';
import scopedStyles from './index.module.css';
import type { HomePageProps } from '@Model/GeneralTypes';

export function getStaticProps() {
  const allPostsData = getPostsList();
  return { props: { allPostsData } };
}

function Home(props: HomePageProps): React.ReactElement {
  /* States */
  const { allPostsData } = props;
  const i18n = useI18n();
  const path = useUrlPath();

  /* Data */
  const postInIndex = allPostsData.slice(0, LATEST_POST_COUNT_IN_INDEX);
  const [
    firstPost,
    secondPost,
    thirdPost,
    fourthPost,
    fifthPost,
    ...restRecentPosts
  ] = postInIndex;

  /* Views */
  const LatestPostsBlock = (
    <LatestPost
      latest={
        <PostCard
          coverImage={MOCK_COVER_IMAGE}
          postTitle={firstPost.title}
          postDate={firstPost.date}
          postCategories={firstPost.tag}
          postUrl={`/${firstPost.year}/${firstPost.id}`}
          summary={firstPost.summary}
        />
      }
      second={
        <PostCard
          coverImage={MOCK_COVER_IMAGE}
          postTitle={secondPost.title}
          postDate={secondPost.date}
          postCategories={secondPost.tag}
          postUrl={`/${secondPost.year}/${secondPost.id}`}
          summary={secondPost.summary}
        />
      }
      third={
        <PostCard
          coverImage={MOCK_COVER_IMAGE}
          postTitle={thirdPost.title}
          postDate={thirdPost.date}
          postCategories={thirdPost.tag}
          postUrl={`/${thirdPost.year}/${thirdPost.id}`}
          summary={thirdPost.summary}
        />
      }
      fourth={
        <PostCard
          coverImage={MOCK_COVER_IMAGE}
          postTitle={fourthPost.title}
          postDate={fourthPost.date}
          postCategories={fourthPost.tag}
          postUrl={`/${fourthPost.year}/${fourthPost.id}`}
          summary={fourthPost.summary}
        />
      }
      fifth={
        <PostCard
          coverImage={MOCK_COVER_IMAGE}
          postTitle={fifthPost.title}
          postDate={fifthPost.date}
          postCategories={fifthPost.tag}
          postUrl={`/${fifthPost.year}/${fifthPost.id}`}
          summary={fifthPost.summary}
        />
      }
    />
  );
  const RestPostsList = useGetPostList(restRecentPosts);
  const MorePostsLink = useReplaceToNode(
    i18n.t('frontend.homePage.latestPosts.morePosts'),
    [
      <Link href={path.techBlog} key={path.techBlog}>
        {i18n.t('frontend.nav.techBlog')}
      </Link>,
    ]
  );

  /* Main */
  return (
    <React.Fragment>
      {/* about */}
      <section>
        <Container>
          <Typography variant="h2">
            {i18n.t('frontend.homePage.about.secondTitle')}
          </Typography>
          <Typography variant="body1" className={scopedStyles.description}>
            {i18n.t('frontend.homePage.about.description')}
          </Typography>
        </Container>
      </section>

      {/* posts list */}
      <section>
        <Container>
          <Typography variant="h2">
            {i18n.t('frontend.homePage.latestPosts.secondTitle')}
          </Typography>
        </Container>
        {LatestPostsBlock}
        <Container>
          <PostListContainer>
            {RestPostsList}
            <li>
              <Typography variant="body1">{MorePostsLink}</Typography>
            </li>
          </PostListContainer>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default memo(Home);
