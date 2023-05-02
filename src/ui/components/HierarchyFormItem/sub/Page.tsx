import React from 'react';

import { IPage } from 'domain/component';

import { FormItemProps } from './types';

export const Page = ({ element, children }: FormItemProps<IPage>) => {
  return (
    <div>{children}</div>
  );
};
