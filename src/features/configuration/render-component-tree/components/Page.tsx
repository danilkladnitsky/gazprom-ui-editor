import { Container } from '@mui/system';
import React, { FC } from 'react';

import styles from "./Page.module.scss";

const Page: FC = ({ children }) => {
  return (
      <Container className={styles.page}>{children}</Container>
  )
}

export default Page;