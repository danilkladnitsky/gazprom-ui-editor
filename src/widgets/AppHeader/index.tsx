import React from 'react';
import { EditorActions } from 'ui/components/EditorActions';

import styles from './styles.module.scss';

export const AppHeader = () => {
  return (
    <div className={styles.header}>
      <EditorActions />
    </div>
  );
};
