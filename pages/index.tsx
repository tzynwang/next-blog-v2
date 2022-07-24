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
          <div>title: {title}</div>
          <div>date: {date}</div>
          <div>category: {category}</div>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default memo(Home);
