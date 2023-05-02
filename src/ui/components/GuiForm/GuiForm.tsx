import React, { useEffect } from 'react';
import { useControls } from 'react-zoom-pan-pinch';
import { useAppStore } from 'store/appStore';
import { withZooming } from 'ui/hocs/withZooming';

import { HierarchyForm } from '../../shared/HierarchyForm';
import { GuiFormItem } from '../GuiFormItem';

const GuiForm = () => {
  const { form, editorMode } = useAppStore();
  const { resetTransform, centerView } = useControls();

  useEffect(() => {
    resetTransform();
    centerView();
  }, [form ,editorMode]);

  return <HierarchyForm template={GuiFormItem} />;
};

export default withZooming(GuiForm);
