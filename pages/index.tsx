import React, { memo } from 'react';
import { getPostsList } from '@Lib/post';
import type { HomeProps } from './types';

export function getStaticProps() {
  const allPostsData = getPostsList();
  return { props: { allPostsData } };
}

function Home(props: HomeProps): React.ReactElement {
  /* States */
  const { allPostsData } = props;

  /* Main */
  return (
    <React.Fragment>
      {allPostsData.map(({ id, date, title, category, htmlContent }) => (
        <React.Fragment key={id}>
          <div className="text-xl">title: {title}</div>
          <div className="text-xl">date: {date}</div>
          <div className="text-xl">category: {category}</div>
          <div
            className="postContentWrapper"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default memo(Home);
