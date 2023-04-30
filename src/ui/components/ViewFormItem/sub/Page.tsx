import React from 'react';

import { IPage } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Page = ({ item, children }: ViewFormItemProps<IPage>) => {
  return (
    <div>{children}</div>
  );
};
