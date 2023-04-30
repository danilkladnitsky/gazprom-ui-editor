import React, { ComponentType } from 'react';
import { useAppStore } from 'store/appStore';

import { TreeStructure, TreeTemplateProps } from '../TreeStructure';

type Props<I> = {
  template: ComponentType<TreeTemplateProps<I>>;
}

export const HierarchyForm = <I,>({ template }: Props<I>) => {
  const { form } = useAppStore();

  const formTree = { items: [form] };

  return (
    form && <TreeStructure
      data={formTree}
      template={template}
    />
  );
};
