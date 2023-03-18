import { Typography } from '@mui/material';
import React, { FC } from 'react';

import styles from "./Form.module.scss";


export const Form: FC = ({ children }) => {
  return (
    <div className={styles.form}>
      <Typography>Страница</Typography>
        {children}
      </div>
  )
}
