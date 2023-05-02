import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { IForm } from 'domain/component';

import { ViewFormItemProps } from './types';

import styles from './Form.module.scss';

export const Form = ({ item, children, onClick }: ViewFormItemProps<IForm>) => {
  const handleClick = () => {
    onClick?.(item);
  };

  return (
    <div className={styles.form} id="form">
      <Stack spacing={2}>
        <Typography variant="h6" onClick={handleClick}>
          {item.name}
        </Typography>
        {children}
      </Stack>
    </div>
  );
};
