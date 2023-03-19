import React from 'react'

import { TextField } from '@mui/material';
import { ComponentElement } from 'entities/component';
import { NumberParameter } from 'entities/parameter';

type Props = {
  element: NumberParameter;
}

export const NumberInput = ({ element }: Props) => {
  const { name } = element;
  const { maxValue, minValue } = element.properties || {};

  return (
    <TextField label={name} type="number" />
  )
}
