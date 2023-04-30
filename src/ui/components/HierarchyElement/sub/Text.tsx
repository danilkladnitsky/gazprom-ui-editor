import React from 'react';
import { TextField } from '@mui/material';
import { TextInput } from 'ui/shared/TextInput';

import { IBaseParameter } from 'domain/parameter';

import { ElementProps } from './types';

export const Text = ({ dataSource, element }: ElementProps<IBaseParameter>) => {
  const { name, type } = element;
  return (
    <TextInput label={name} />
  );
};
