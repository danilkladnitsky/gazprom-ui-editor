import React from 'react';
import { Stack } from '@mui/system';
import { DragElement } from 'ui/components/DragElement';
import { WithDragging } from 'ui/hocs/withDragging';
import { WithDropping } from 'ui/hocs/withDropping';

import { ELEMENT_TYPE, IGroup } from 'domain/component';

import { DropZone } from './DropZone';
import { HierarchyTitle } from './HierarchyTitle';
import { FormItemProps } from './types';

export const Group = ({ element, children, dropPosition }: FormItemProps<IGroup>) => {
  return (
    <Stack>
      <WithDragging item={element} type={ELEMENT_TYPE.GROUP}>
        {({ dragRef }) => <DragElement ref={dragRef}>
          <HierarchyTitle item={element} />
        </DragElement>}
      </WithDragging>
      <WithDropping accept={[ELEMENT_TYPE.ELEMENT]}>
        {DropZone}
      </WithDropping>
      {children}
    </Stack>
  );
};
