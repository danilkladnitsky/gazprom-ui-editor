import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { IGroup } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Group = ({ item, children }: ViewFormItemProps<IGroup>) => {
  return (
    <div>
      <Typography variant="body1">{item.name}</Typography>
      <Stack spacing={2}>
        {children}
      </Stack>
    </div>
  );
};
