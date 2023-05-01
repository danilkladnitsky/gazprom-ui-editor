import React from 'react';
import { TextInput } from 'ui/shared/TextInput';

import { ElementProps } from './types';

export const Text = ({ element }: ElementProps) => {
  const { name, properties } = element;
  return (
    <TextInput label={ properties?.title || name} />
  );
};
