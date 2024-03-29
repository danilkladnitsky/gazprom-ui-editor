import React, { useEffect } from 'react';
import { useControls } from 'react-zoom-pan-pinch';
import { useAppStore } from 'store/appStore';
import { useComponentsStore } from 'store/componentStore';
import { withZooming } from 'ui/hocs/withZooming';

import { HierarchyForm } from '../../shared/HierarchyForm';
import { GuiFormItem } from '../GuiFormItem';

import styles from './GuiForm.module.scss';

const GuiForm = () => {
  const { form, editorMode, fullScreen } = useAppStore();
  const activePage = useComponentsStore(state => state.activePageIndex);

  const { resetTransform, centerView } = useControls();

  useEffect(() => {
    resetTransform();
    centerView();
  }, [form, editorMode, fullScreen, activePage]);

  return <div className={styles.form}>
    <HierarchyForm template={GuiFormItem} />
  </div>;
};

export default withZooming(GuiForm);
