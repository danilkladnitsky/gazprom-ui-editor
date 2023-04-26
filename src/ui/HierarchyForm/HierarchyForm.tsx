import React from 'react';
import { useAppStore } from 'store/appStore';
import { HierarchyFormItem } from 'ui/HierarchyFormItem';
import { TreeStructure } from 'ui/TreeStructure';

export const HierarchyForm = () => {
  const { form } = useAppStore();

  return (
    <>
      <TreeStructure data={form} template={HierarchyFormItem} />
    </>
  );
};
