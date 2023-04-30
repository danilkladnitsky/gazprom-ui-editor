import React from 'react';

import { IComponent } from 'domain/component';

import { TreeTemplateProps } from '../TreeStructure';

import { ComponentItem } from './sub/ComponentItem';

export const ViewFormItem = ({ children, item }
  : TreeTemplateProps<IComponent>) => {
  return <ComponentItem item={item}>
    {children}
  </ComponentItem>
  ;
};
