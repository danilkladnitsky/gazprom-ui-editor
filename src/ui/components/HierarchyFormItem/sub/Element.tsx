import React from 'react';
import { useAppStore } from 'store/appStore';
import { DragElement } from 'ui/components/DragElement';
import { WithDragging } from 'ui/hocs/withDragging';
import { WithDropping } from 'ui/hocs/withDropping';

import { ELEMENT_TYPE, IElement } from 'domain/component';
import { TREE_ACTIONS } from 'domain/tree';

import { DropZone } from './DropZone';
import { HierarchyTitle } from './HierarchyTitle';
import { FormItemProps } from './types';

const ACCEPT_ITEMS = [ELEMENT_TYPE.ELEMENT];

export const Element = ({ element, dropPosition }: FormItemProps<IElement>) => {
  const { modifyTree } = useAppStore();

  const onDrop = (item: IElement) => {
    modifyTree(TREE_ACTIONS.PLACE_NODE, { pos: dropPosition, itemId: item.code });
  };

  return (
    <>
      <WithDragging item={element} type={ELEMENT_TYPE.ELEMENT}>
        {({ dragRef }) => <DragElement ref={dragRef}>
          <HierarchyTitle item={element} />
        </DragElement>}
      </WithDragging>
      <WithDropping accept={ACCEPT_ITEMS} onDrop={onDrop}>
        {DropZone}
      </WithDropping>
    </>
  );
};
