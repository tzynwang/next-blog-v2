import React, { memo } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import useI18n from '@Hook/useI18n';
import { MAX_HEADING_LEVEL_IN_TECH_POST } from '@Model/GeneralModels';
import scopedStyles from './index.module.css';
import type { TableOfContentProps } from './types';

function TableOfContent(props: TableOfContentProps): React.ReactElement {
  /* States */
  const { tableOfContents } = props;
  const i18n = useI18n();

  /* Functions */
  const getHeadingIndent = (headingLevel: number) => {
    return headingLevel - MAX_HEADING_LEVEL_IN_TECH_POST > 0
      ? `${(headingLevel - MAX_HEADING_LEVEL_IN_TECH_POST) * 16}px`
      : 0;
  };

  /* Main */
  return (
    <div>
      <Typography variant="h4" component="p">
        {i18n.t('frontend.techBlogSinglePost.toc')}
      </Typography>
      <ul className={cn(scopedStyles.toc_container)}>
        {tableOfContents.map(({ depth, to, postSubTitle }, index) => (
          <li
            key={index}
            style={{
              paddingLeft: getHeadingIndent(depth),
            }}
          >
            <Link href={to}>{postSubTitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(TableOfContent);
