import React from 'react'

import { TextField } from '@mui/material';
import { ComponentElement } from 'entities/component';

export const NumberInput = (props: ComponentElement) => {
  const { name } = props;
  
  return (
    <TextField label={name} type="number" />
  )
}
