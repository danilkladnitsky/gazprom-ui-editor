import React from 'react';
import { useAppStore } from 'store/appStore';
import { HierarchyForm } from 'ui/shared/HierarchyForm';

import { GenerateForm } from '../GenerateForm';
import { HierarchyFormItem } from '../HierarchyFormItem';

export const FormList = () => {
  const form = useAppStore((state) => state.form);

  if (!form) {
    return <GenerateForm />;
  }

  return (
    <HierarchyForm template={HierarchyFormItem} />
  );
};
