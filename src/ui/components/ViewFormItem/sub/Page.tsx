import React from 'react';
import { Typography } from '@mui/material';

import { IPage } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Page = ({ item, children, onClick }: ViewFormItemProps<IPage>) => {

  const handleClick = () => {
    onClick?.(item);
  };

  return (
    <div>
      <Typography variant="h6" onClick={handleClick}>{item.name}</Typography>
      {children}
    </div>
  );
};
