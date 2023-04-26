import React from 'react';
import { useAppStore } from 'store/appStore';

import { HierarchyFormItem } from '../HierarchyFormItem';
import { TreeStructure } from '../TreeStructure';

export const HierarchyForm = () => {
  const { form } = useAppStore();

  return (
    <div>
      {form && <TreeStructure data={form} template={HierarchyFormItem} />}
    </div>
  );
};
