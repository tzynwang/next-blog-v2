import React, { memo } from 'react';
import Container from '@mui/material/Container';
import scopedStyle from './index.module.css';
import type { LatestPostLayoutProps } from './types';

function LatestPostLayout(props: LatestPostLayoutProps): React.ReactElement {
  /* States */
  const { latest, second, third, fourth, fifth } = props;

  /* Main */
  return (
    <Container className={scopedStyle.container}>
      <div className={scopedStyle.wrapper}>
        <div className={scopedStyle.latest}>{latest}</div>
        <div className={scopedStyle.second}>{second}</div>
        <div className={scopedStyle.third}>{third}</div>
        <div className={scopedStyle.fourth}>{fourth}</div>
        <div className={scopedStyle.fifth}>{fifth}</div>
      </div>
    </Container>
  );
}

export default memo(LatestPostLayout);
