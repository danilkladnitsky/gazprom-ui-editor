import React from 'react';
import { withZooming } from 'ui/hocs/withZooming';

import { HierarchyForm } from '../../shared/HierarchyForm';
import { ViewFormItem } from '../ViewFormItem';

const GuiForm = () => {
  return <HierarchyForm template={ViewFormItem} />;
};

export default withZooming(GuiForm);
