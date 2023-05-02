import React from 'react';
import { useAppStore } from 'store/appStore';
import GuiForm from 'ui/components/GuiForm/GuiForm';
import { JsonForm } from 'ui/components/JsonForm';

import styles from './styles.module.scss';

const ViewConfiguration = () => {
  const { editorMode } = useAppStore();

  return <div className={styles.configuration}>
    {editorMode === 'text' ? <JsonForm /> : <GuiForm />}
  </div>;
};

export default ViewConfiguration;
