import React, { memo } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import useI18n from '@Hook/useI18n';
import scopedStyles from './index.module.css';
import type { TableOfContentProps } from './types';

function TableOfContent(props: TableOfContentProps): React.ReactElement {
  /* States */
  const { tableOfContents } = props;
  const i18n = useI18n();

  /* Main */
  return (
    <div>
      <Typography variant="h4" component="p">
        {i18n.t('frontend.techBlogSinglePost.toc')}
      </Typography>
      <ul className={cn(scopedStyles.toc_container)}>
        {tableOfContents.map((content, index) => (
          <li key={index}>
            <Link href={`#${content.to}`}>{content.postSubTitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(TableOfContent);
