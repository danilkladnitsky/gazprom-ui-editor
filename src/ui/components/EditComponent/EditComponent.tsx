import React from 'react';
import { Typography } from '@mui/material';
import { useComponentsStore } from 'store/componentStore';

import { EditFormFields } from './EditFormFields';

import styles from './styles.module.scss';

export const EditComponent = () => {
  const { selectedComponent } = useComponentsStore();

  console.log(selectedComponent);

  return (
    <div className={styles.wrapper}>
      <Typography variant="h6">Редактирование компонента</Typography>
      {selectedComponent &&
        <EditFormFields component={selectedComponent} />}
    </div>
  );
};
