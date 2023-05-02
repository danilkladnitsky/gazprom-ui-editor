import React from 'react';
import { DeleteForever } from '@mui/icons-material';
import { Button } from '@mui/material';
import classNames from 'classnames';
import { useAppStore } from 'store/appStore';
import { WithDropping } from 'ui/hocs/withDropping';

import { ELEMENT_TYPE, IElement } from 'domain/component';
import { TREE_ACTIONS } from 'domain/tree';

import styles from './DeleteComponent.module.scss';

export const DeleteComponent = () => {
  const modifyTree = useAppStore(state => state.modifyTree);

  const deleteOnDrop = (element: IElement) => {
    modifyTree(TREE_ACTIONS.REMOVE_NODE, { itemId: element.code });
  };

  return (
    <WithDropping
      onDrop={deleteOnDrop}
      accept={[ELEMENT_TYPE.ELEMENT, ELEMENT_TYPE.GROUP, ELEMENT_TYPE.PAGE]}
    >{
        ({ dropRef, droppingItem, canDrop }) => {
          const componentName = droppingItem?.name;
          const title = `Удалить ${componentName}`;

          return <div
            ref={dropRef}
            className={classNames(styles.deleteZone,
              { [styles.canDelete]: canDrop })}>
            {canDrop && <Button variant="outlined" color="error" startIcon={<DeleteForever />}>
              {title}
            </Button>}
          </div>;
        }
      }</WithDropping>
  );
};
