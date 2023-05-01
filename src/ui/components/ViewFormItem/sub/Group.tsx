import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { IGroup } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Group = ({ item, children, onClick, ref }
  : ViewFormItemProps<IGroup>) => {

  const handleClick = () => {
    onClick?.(item);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="body1" onClick={handleClick}>{item.name}</Typography>
      {children}
    </Stack>
  );
};
