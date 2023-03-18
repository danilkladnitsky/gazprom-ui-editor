import { Container } from '@mui/system';
import React from 'react';

import styles from "./Page.module.scss";
import { ComponentProps } from './types';

const Page = ({ children }: ComponentProps) => {
  return (
      <Container className={styles.page}>{children}</Container>
  )
}

export default Page;