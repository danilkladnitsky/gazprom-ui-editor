import React from 'react';
import { DroppingComponentProps } from 'ui/hocs/withDropping';

import { IElement } from 'domain/component';

import styles from './DropZone.module.scss';

export const DropZone = ({ dropRef, droppingItem, canDrop }: DroppingComponentProps<IElement>) => {
  if (!droppingItem || !canDrop) {
    return <div className={styles.emptyDrop}></div>;
  }
  return <div ref={dropRef} className={styles.dropZone} />;
};
