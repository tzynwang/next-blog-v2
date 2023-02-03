import Link from 'next/link';
import React from 'react';
import { getPostsYearAndTitle } from '@Lib/post';

interface ArchivePageProps {
  allPostsYearAndTitle: Array<{ id: string; date: string; category: string[] }>;
}

export default function ArchivePage(props: ArchivePageProps) {
  /* States */
  const { allPostsYearAndTitle } = props;

  /* Main */
  return (
    <React.Fragment>
      <h1 className="text-3xl">All posts</h1>
      <ul>
        {allPostsYearAndTitle.map(({ id, date, category }) => (
          <li key={id}>
            <Link href={`/${date}/${id}`} className="inline-flex space-x-2">
              <span>{date}</span>
              <span className="underline">{id}</span>
              <div className="inline-flex space-x-2">
                {category.map((c, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-md bg-secondary-content text-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const allPostsYearAndTitle = getPostsYearAndTitle();
  return { props: { allPostsYearAndTitle } };
}
