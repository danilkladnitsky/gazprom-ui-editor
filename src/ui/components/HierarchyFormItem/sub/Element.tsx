import React from 'react';
import { DragElement } from 'ui/components/DragElement';
import { WithDragging } from 'ui/hocs/withDragging';
import { WithDropping } from 'ui/hocs/withDropping';

import { ELEMENT_TYPE, IElement } from 'domain/component';

import { HierarchyTitle } from './HierarchyTitle';
import { FormItemProps } from './types';

import styles from './Element.module.scss';

const ACCEPT_ITEMS = [ELEMENT_TYPE.ELEMENT];

export const Element = ({ element }: FormItemProps<IElement>) => {
  return (
    <>
      <WithDragging item={element} type={ELEMENT_TYPE.ELEMENT}>
        {({ dragRef }) => <DragElement ref={dragRef}>
          <HierarchyTitle item={element} />
        </DragElement>}
      </WithDragging>
      <WithDropping accept={ACCEPT_ITEMS}>
        {ElementDropzone}
      </WithDropping>
    </>
  );
};

const ElementDropzone = ({ dropRef, droppingItem, isOver }: DroppingComponentProps<IElement>) => {
  return <div ref={dropRef} className={styles.dropZone}>
    {droppingItem?.name}
  </div>;
};
