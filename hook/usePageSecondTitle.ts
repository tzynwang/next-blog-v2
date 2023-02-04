import { useMemo } from 'react';
import { useRouter } from 'next/router';
import useI18n from '@Hook/useI18n';
import { ROUTE } from '@Model/GeneralModels';

export default function usePageSecondTitle() {
  /* States */
  const i18n = useI18n();
  const { pathname } = useRouter();

  /* Data */
  const secondTitleByPathname = useMemo(() => {
    if (pathname.match(ROUTE.SNIPPET)) return i18n.t('frontend.nav.snippet');
    if (pathname.match(ROUTE.BLOG)) return i18n.t('frontend.nav.blog');
    if (pathname.match(ROUTE.TECH_BLOG)) return i18n.t('frontend.nav.techBlog');
    // TODO: 處理 /[category]/[categoryName] 的副標題
    return '';
  }, [pathname]);

  /* Main */
  return secondTitleByPathname;
}
