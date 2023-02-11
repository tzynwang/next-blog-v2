import React, { memo } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ThemeToggle from '@Component/Common/ThemeToggle';
import useI18n from '@Hook/useI18n';
import useUrlPath from '@Hook/useUrlPath';
import theme, { useMediaQuery } from '@Style/mui/index';
import scopedStyles from './index.module.css';

function Footer(): React.ReactElement {
  /* States */
  const breakpointsUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const i18n = useI18n();
  const paths = useUrlPath();

  /* Main */
  return (
    <nav>
      <Container>
        <Typography variant="h1">
          {i18n.t('frontend.global.title.siteTitle')}
        </Typography>
        <div
          className={cn(
            breakpointsUpSm
              ? scopedStyles.nav_ul_container_up_sm
              : scopedStyles.nav_ul_container
          )}
        >
          <ul className={cn(scopedStyles.nav_ul)}>
            <li>
              <Link href={paths.home}>{i18n.t('frontend.nav.homePage')}</Link>
            </li>
            <li>
              <Link href={paths.techBlog}>
                {i18n.t('frontend.nav.techBlog')}
              </Link>
            </li>
            <li>
              <Link href={paths.snippet}>{i18n.t('frontend.nav.snippet')}</Link>
            </li>
            <li>
              <Link href={paths.blog}>{i18n.t('frontend.nav.blog')}</Link>
            </li>
          </ul>
          <ul className={cn(scopedStyles.nav_ul)}>
            <li>
              <a
                href="https://github.com/tzynwang/next-blog-v2"
                target="_blank"
              >
                {i18n.t('frontend.nav.GitHub')}
              </a>
            </li>
            <li>{i18n.t('frontend.nav.RssFeed')}</li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default memo(Footer);
