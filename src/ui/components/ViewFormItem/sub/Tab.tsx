import React from 'react';
import { Typography } from '@mui/material';

import { ITab } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Tab = ({ item, children, onClick }: ViewFormItemProps<ITab>) => {
  const handleClick = () => {
    onClick?.(item);
  };

  return (
    <div>
      <Typography onClick={handleClick}>{item.name}</Typography>
      {children}
    </div>
  );
};
