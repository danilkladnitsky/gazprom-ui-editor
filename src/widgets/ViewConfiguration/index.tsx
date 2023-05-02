import React from 'react';
import { useAppStore } from 'store/appStore';
import { FigmaPreview } from 'ui/components/FigmaPreview';
import GuiForm from 'ui/components/GuiForm/GuiForm';
import { JsonForm } from 'ui/components/JsonForm';

import styles from './styles.module.scss';

const ViewConfiguration = () => {
  const { editorMode, previewIsActive } = useAppStore();

  return <div className={styles.configuration}>
    {editorMode === 'text' ? <JsonForm /> : <GuiForm />}
    <FigmaPreview />
  </div>;
};

export default ViewConfiguration;
