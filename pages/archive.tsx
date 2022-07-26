import Link from 'next/link';
import { getPostsYearAndTitle } from '@Lib/post';

export default function Post({
  allPostsYearAndTitle,
}: {
  allPostsYearAndTitle: { id: string; date: string; category: string[] }[];
}) {
  return (
    <div>
      <h1 className="text-3xl">All posts</h1>
      <ul>
        {allPostsYearAndTitle.map(({ id, date, category }) => (
          <li key={id}>
            <Link href={`/${date}/${id}`}>
              <a className="inline-flex space-x-2">
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
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsYearAndTitle = getPostsYearAndTitle();
  return { props: { allPostsYearAndTitle } };
}
