import React from 'react';
import { withZooming } from 'ui/hocs/withZooming';

import { HierarchyForm } from '../../shared/HierarchyForm';
import { GuiFormItem } from '../GuiFormItem';

const GuiForm = () => {
  return <HierarchyForm template={GuiFormItem} />;
};

export default withZooming(GuiForm);
