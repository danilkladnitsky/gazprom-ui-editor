import React from 'react';
import { TextInput } from 'ui/shared/TextInput';

import { ElementProps } from './types';

export const Number = ({ element }
  : ElementProps) => {
  const { name } = element;

  return (
    <TextInput label={name} type="number" />
  );
};
