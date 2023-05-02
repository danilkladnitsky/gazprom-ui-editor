import React from 'react';
import { Stack } from '@mui/system';

import { IForm } from 'domain/component';

import { HierarchyTitle } from './HierarchyTitle';
import { FormItemProps } from './types';

export const Form = ({ element, children }: FormItemProps<IForm>) => {
  return (
    <Stack>
      <HierarchyTitle item={element} />
      {children}
    </Stack>
  );
};
