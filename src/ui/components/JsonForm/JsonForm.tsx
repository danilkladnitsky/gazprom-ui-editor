import React from 'react';
import { HierarchyForm } from 'ui/shared/HierarchyForm';

import { JsonFormItem } from '../JsonFormItem';

import styles from './JsonForm.module.scss';

export const JsonForm = () => {
  return (
    <div className={styles.form}>
      <HierarchyForm template={JsonFormItem} />
    </div>
  );
};
