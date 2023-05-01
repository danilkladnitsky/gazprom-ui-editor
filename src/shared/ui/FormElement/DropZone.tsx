import React from 'react';
import { Skeleton } from '@mui/material';
import { SchemaTree } from 'entities/app-configuration/domain';

import { withDropping, withDroppingProps } from 'shared/hocs/withDropping';

import styles from './DropZone.module.scss';

type Props = withDroppingProps<SchemaTree>;

function DropZone({ isHovered }: Props) {
  if (isHovered) {
    return <Skeleton className={styles.isHovered} animation="pulse" />;
  }

  return <div className={styles.zone}></div>;
}

export default withDropping(DropZone, ['component-list']);
