import React, { memo } from 'react';
import PostCategoryChip from '@Component/Common/PostCategoryChip';
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
        <section key={id}>
          <h1 className="text-3xl">{title}</h1>
          <div className="text-xl my-1">{date}</div>
          <div className="inline-flex space-x-2">
            {category.map((c, index) => (
              <PostCategoryChip key={index} label={c} />
            ))}
          </div>
          <div
            className="postContentWrapper"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </section>
      ))}
    </React.Fragment>
  );
}

export default memo(Home);
