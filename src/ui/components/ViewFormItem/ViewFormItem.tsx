import React from 'react';
import { useComponentsStore } from 'store/componentStore';

import { TreeItem } from 'domain/tree';

import { TreeTemplateProps } from '../TreeStructure';

import { ComponentItem } from './ComponentItem';

export const ViewFormItem = ({ children, item }
  : TreeTemplateProps<TreeItem>) => {
  const components = useComponentsStore((state) => state.components);

  const component = components.find(c => c.code === item.code);

  if (!component) {
    return children;
  }

  return <ComponentItem item={component}>
    {children}
  </ComponentItem>
  ;
};
