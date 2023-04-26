import React from 'react';
import { TreeTemplateProps } from 'ui/TreeStructure';

import { IComponent } from 'domain/component';

type Props = TreeTemplateProps<IComponent>;

export const HierarchyFormItem = ({ children, item }: Props) => {
  return (
    <div>
      {item.name}
      {children}</div>
  );
};
