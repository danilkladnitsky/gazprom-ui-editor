import React from 'react';
import { Stack } from '@mui/system';
import { WithDropping } from 'ui/hocs/withDropping';

import { ELEMENT_TYPE, IPage } from 'domain/component';

import { DropZone } from './DropZone';
import { HierarchyTitle } from './HierarchyTitle';
import { FormItemProps } from './types';

export const Page = ({ element, children }: FormItemProps<IPage>) => {
  return (
    <Stack>
      <HierarchyTitle item={element} />
      <WithDropping accept={[ELEMENT_TYPE.ELEMENT, ELEMENT_TYPE.GROUP]}>
        {DropZone}
      </WithDropping>
      {children}
    </Stack>
  );
};
