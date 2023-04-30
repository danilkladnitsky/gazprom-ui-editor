import React from 'react';
import { TextInput } from 'ui/shared/TextInput';

import { IBaseParameter } from 'domain/parameter';

import { ElementProps } from './types';

export const Number = ({ dataSource, element }
  : ElementProps<IBaseParameter>) => {
  const { name } = element;

  return (
    <TextInput label={name} />
  );
};
