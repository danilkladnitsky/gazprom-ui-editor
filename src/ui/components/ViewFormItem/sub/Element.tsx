import React from 'react';

import { IElement } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Element = ({ item }: ViewFormItemProps<IElement>) => {
  const { name, type } = item;

  return (
    <div>{name}</div>
  );
};
