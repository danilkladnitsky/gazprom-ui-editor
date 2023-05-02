import React from 'react';
import { Stack } from '@mui/system';
import { useAppStore } from 'store/appStore';
import { WithDropping } from 'ui/hocs/withDropping';

import { ELEMENT_TYPE, IComponent, IPage } from 'domain/component';
import { TREE_ACTIONS } from 'domain/tree';

import { DropZone } from './DropZone';
import { HierarchyTitle } from './HierarchyTitle';
import { FormItemProps } from './types';

export const Page = ({ element, children, dropPosition }: FormItemProps<IPage>) => {
  const { modifyTree } = useAppStore();

  const onDrop = (item: IComponent) => {
    modifyTree(TREE_ACTIONS.ADD_CHILDREN, { parentId: element.code, childId: item.code });
  };

  return (
    <Stack>
      <HierarchyTitle item={element} />
      <WithDropping accept={[ELEMENT_TYPE.ELEMENT, ELEMENT_TYPE.GROUP]} onDrop={onDrop}>
        {DropZone}
      </WithDropping>
      {children}
    </Stack>
  );
};
