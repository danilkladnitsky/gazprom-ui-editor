import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { FC } from 'react';

import styles from "./Form.module.scss";
import { ComponentProps } from './types';


export const Form = ({ children, component }: ComponentProps) => {
  const { name, description } = component;

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <Typography variant='h6'>{name}</Typography>
        <Typography variant="body2">{description}</Typography>
      </div>
        {children}
      </div>
  )
}
