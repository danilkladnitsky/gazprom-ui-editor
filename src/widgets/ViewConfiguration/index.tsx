import React from 'react';
import { useAppStore } from 'store/appStore';
import { useParametersStore } from 'store/parameterStore';
import { GenerateForm } from 'ui/components/GenerateForm';
import { HierarchyForm } from 'ui/components/HierarchyForm';
import { ViewFormItem } from 'ui/components/ViewFormItem';

import styles from './styles.module.scss';

const ViewConfiguration = () => {
  const { form } = useAppStore();
  const { parameters } = useParametersStore();

  const canGenerateForm = !form && parameters.length;

  if (canGenerateForm) {
    return <GenerateForm />;
  }

  return <div className={styles.configuration}>
    <HierarchyForm template={ViewFormItem} />
  </div>;
};

export default ViewConfiguration;
