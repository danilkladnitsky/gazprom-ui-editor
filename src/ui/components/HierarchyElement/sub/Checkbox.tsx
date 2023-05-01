import React from 'react';
import { FormControlLabel } from '@mui/material';
import MUICheckbox from '@mui/material/Checkbox';

import { ElementProps } from './types';

import styles from './Checkbox.module.scss';

export const Checkbox = ({ element }
  : ElementProps) => {
  const { name, properties } = element;

  return (
    <FormControlLabel
      label={properties?.title || name}
      control={<MUICheckbox className={styles.checkbox} />}
    />
  );
};
