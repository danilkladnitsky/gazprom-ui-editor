import React from 'react';

import { ITab } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Tab = ({ item, children }: ViewFormItemProps<ITab>) => {
  return (
    <div>{children}</div>
  );
};
