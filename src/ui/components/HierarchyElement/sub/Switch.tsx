import React from 'react';
import { FormControlLabel, Switch as MuiSwitch } from '@mui/material';

import { ElementProps } from './types';

export const Switch = ({ element }: ElementProps) => {
  const { name } = element;

  return (
    <FormControlLabel control={<MuiSwitch name={name} defaultChecked />} label={name} />
  );
};
