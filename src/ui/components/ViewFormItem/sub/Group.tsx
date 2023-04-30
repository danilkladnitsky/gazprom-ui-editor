import React from 'react';
import { Typography } from '@mui/material';

import { IGroup } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Group = ({ item, children }: ViewFormItemProps<IGroup>) => {
  return (
    <div>
      <div>
        <Typography variant="body1">{item.name}</Typography>
      </div>
      {children}
    </div>
  );
};
