import React, { memo, useMemo } from 'react';
import cn from 'classnames';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useI18n from '@Hook/useI18n';
import { useReplaceToString } from '@Hook/useStringReplacement';
import scopedStyles from './index.module.css';

function Footer(): React.ReactElement {
  /* States */
  const i18n = useI18n();
  const thisYear = useMemo(() => `${new Date().getFullYear()}`, []);
  const footerDescription = useReplaceToString(
    i18n.t('frontend.footer.copyRight'),
    [thisYear]
  );

  /* Main */
  return (
    <footer>
      <Container className={cn(scopedStyles.footer_description)}>
        <Typography variant="body1">{footerDescription}</Typography>
      </Container>
    </footer>
  );
}

export default memo(Footer);
