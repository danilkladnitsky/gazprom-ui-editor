import React from 'react';

import { ITab } from 'domain/component';

import { FormItemProps } from './types';

export const Tab = ({ element, children }: FormItemProps<ITab>) => {
  return (
    <div>{children}</div>
  );
};
