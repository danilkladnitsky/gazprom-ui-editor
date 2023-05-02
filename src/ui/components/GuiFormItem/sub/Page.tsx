import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Stack, Typography } from '@mui/material';

import { IPage } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Page = ({ item, children, onClick }: ViewFormItemProps<IPage>) => {
  const [animRef] = useAutoAnimate();
  const { properties } = item;

  const handleClick = () => {
    onClick?.(item);
  };

  const isHidden = properties?.hidden;

  return (
    <Stack spacing={2}>
      <Typography variant="body1" onClick={handleClick}>{item.name}</Typography>
      {!isHidden && <Stack ref={animRef}>
        {children}
      </Stack>}
    </Stack>
  );
};
