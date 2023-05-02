import React from 'react';
import { Stack } from '@mui/system';

import { ITab } from 'domain/component';

import { HierarchyTitle } from './HierarchyTitle';
import { FormItemProps } from './types';

export const Tab = ({ element, children }: FormItemProps<ITab>) => {
  return (
    <Stack>
      <HierarchyTitle item={element} />
      {children}
    </Stack>
  );
};
