import { useMemo } from 'react';
import { useRouter } from 'next/router';
import useI18n from '@Hook/useI18n';
import { ROUTE } from '@Model/GeneralModels';

export default function usePageSecondTitle() {
  /* States */
  const i18n = useI18n();
  const { pathname, asPath } = useRouter();

  /* Data */
  const secondTitleByPathname = useMemo(() => {
    if (pathname.match(ROUTE.SNIPPET)) return i18n.t('frontend.nav.snippet');
    if (pathname.match(ROUTE.BLOG)) return i18n.t('frontend.nav.blog');
    if (pathname.match(ROUTE.TECH_BLOG)) return i18n.t('frontend.nav.techBlog');
    if (pathname.match(ROUTE.TECH_BLOG_TAG))
      return `${i18n.t('frontend.nav.techBlog')}：${asPath.split('/').pop()}`;
    return '';
  }, [pathname, asPath]);

  /* Main */
  return secondTitleByPathname;
}
