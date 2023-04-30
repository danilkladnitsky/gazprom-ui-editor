import React from 'react';
import { Typography } from '@mui/material';

import { IForm } from 'domain/component';

import { ViewFormItemProps } from './types';

import styles from './Form.module.scss';

export const Form = ({ item, children }: ViewFormItemProps<IForm>) => {
  return (
    <div className={styles.form}>
      <Typography variant="h6">
        {item.name}
      </Typography>
      {children}
    </div>
  );
};
