import React from 'react';
import { HierarchyElement } from 'ui/components/HierarchyElement';

import { IElement } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Element = ({ item }: ViewFormItemProps<IElement>) => {
  const { name, type } = item;

  return (
    <HierarchyElement element={item} />
  );
};
