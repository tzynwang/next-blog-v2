import { useMemo } from 'react';
import { ROUTE } from '@Model/GeneralModels';

export default function useUrlPath() {
  /* Data */
  const urlPrefix = useMemo(() => process.env.BASE_URL ?? '', []);

  /* Main */
  return {
    home: `${urlPrefix}${ROUTE.HOME}`,
    techBlog: `${urlPrefix}${ROUTE.TECH_BLOG}`,
    techBlogTag: `${urlPrefix}${ROUTE.TECH_BLOG_TAG}`,
    techBlogSinglePost: `${urlPrefix}${ROUTE.TECH_BLOG_SINGLE_POST}`,
    snippet: `${urlPrefix}${ROUTE.SNIPPET}`,
    blog: `${urlPrefix}${ROUTE.BLOG}`,
  };
}
