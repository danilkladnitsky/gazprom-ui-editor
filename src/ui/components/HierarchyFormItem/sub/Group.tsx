import React from 'react';
import { Stack } from '@mui/system';

import { IGroup } from 'domain/component';

import { FormItemProps } from './types';

export const Group = ({ element, children }: FormItemProps<IGroup>) => {
  return (
    <Stack spacing={1}>{children}</Stack>
  );
};
