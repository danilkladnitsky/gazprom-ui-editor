import React from 'react';
import { Stack } from '@mui/system';
import { useAppStore } from 'store/appStore';
import { DragElement } from 'ui/components/DragElement';
import { WithDragging } from 'ui/hocs/withDragging';
import { WithDropping } from 'ui/hocs/withDropping';

import { ELEMENT_TYPE, IComponent, IElement, IGroup } from 'domain/component';
import { TREE_ACTIONS } from 'domain/tree';

import { DropZone } from './DropZone';
import { HierarchyTitle } from './HierarchyTitle';
import { FormItemProps } from './types';

export const Group = ({ element, children, dropPosition }: FormItemProps<IGroup>) => {
  const { modifyTree } = useAppStore();

  const onDrop = (item: IComponent) => {
    if (item.type === ELEMENT_TYPE.ELEMENT) {
      modifyTree(TREE_ACTIONS.ADD_CHILDREN, { parentId: element.code, childId: item.code });
    }

    if (item.type === ELEMENT_TYPE.GROUP) {
      modifyTree(TREE_ACTIONS.PLACE_NODE, { itemId: item.code, pos: dropPosition });
    }
  };

  return (
    <Stack>
      <WithDragging item={element} type={ELEMENT_TYPE.GROUP}>
        {({ dragRef }) => <DragElement ref={dragRef}>
          <HierarchyTitle item={element} />
        </DragElement>}
      </WithDragging>
      <WithDropping accept={[ELEMENT_TYPE.ELEMENT, ELEMENT_TYPE.GROUP]} onDrop={onDrop}>
        {DropZone}
      </WithDropping>
      {children}
    </Stack>
  );
};
