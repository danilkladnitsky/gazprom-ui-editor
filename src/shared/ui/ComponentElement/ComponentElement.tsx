import React from 'react';
import { Button } from '@mui/material';

import { withDragging, withDraggingProps } from 'shared/hocs/withDragging';
import { useComponent } from 'shared/hooks/useComponent';

import { ListItemProps } from '../List';
import { TimeAgo } from '../TimeAgo';

import styles from './styles.module.scss';

function ComponentElement({
  item,
  isDragging,
}: ListItemProps & withDraggingProps) {
  const component = useComponent(item.id);

  if (!component) {
    return null;
  }

  return (
    <div className={styles.component}>
      <Button
        variant={isDragging ? 'outlined' : 'contained'}
        endIcon={<TimeAgo date={component.timestamp} />}
      >
        {item.name}
      </Button>
    </div>
  );
}

export default withDragging(ComponentElement, 'component-list');
