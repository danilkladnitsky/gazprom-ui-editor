import React from 'react';
import { useAppStore } from 'store/appStore';
import { useParametersStore } from 'store/parameterStore';
import { GenerateForm } from 'ui/components/GenerateForm';
import GuiForm from 'ui/components/GuiForm/GuiForm';

import styles from './styles.module.scss';

const ViewConfiguration = () => {
  const { form } = useAppStore();
  const { parameters } = useParametersStore();

  const canGenerateForm = !form && parameters.length;

  if (canGenerateForm) {
    return <GenerateForm />;
  }

  return <div className={styles.configuration}>
    <GuiForm />
  </div>;
};

export default ViewConfiguration;
