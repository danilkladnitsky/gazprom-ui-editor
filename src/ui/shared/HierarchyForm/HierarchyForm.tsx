import React, { ComponentType } from 'react';
import { useAppStore } from 'store/appStore';

import { TreeStructure, TreeTemplateProps } from '../../components/TreeStructure';

type Props<I> = {
  template: ComponentType<TreeTemplateProps<I>>;
}

export const HierarchyForm = <I,>({ template }: Props<I>) => {
  const { form } = useAppStore();

  const formTree = { items: form ? [form] : [] };

  return (
    <>
      {form && <TreeStructure
        data={formTree}
        template={template}
      />}
    </>
  );
};
