import React from 'react'

import { NumberParameter } from 'entities/parameter';
import { TextField } from '@mui/material';

type Props = {
    parameter: NumberParameter;
};

export const NumberInput = ({ parameter }: Props) => {
    const { label, property } = parameter;
  return (
    <TextField label={label} type="number" />
  )
}
