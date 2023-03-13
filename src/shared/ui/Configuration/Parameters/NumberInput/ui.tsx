import React from 'react'

import { NumberParameter } from 'entities/parameter';
import { TextField } from '@mui/material';

type Props = {
  parameter: NumberParameter;
  name: string;
};

export const NumberInput = ({ parameter, name }: Props) => {
  const { label, property } = parameter;
  
  return (
    <TextField label={name} type="number" />
  )
}
