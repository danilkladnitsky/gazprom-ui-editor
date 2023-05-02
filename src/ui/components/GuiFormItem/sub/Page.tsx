import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Stack, Typography } from '@mui/material';
import { useComponentsStore } from 'store/componentStore';

import { IPage } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Page = ({ item, children, onClick, position }: ViewFormItemProps<IPage>) => {
  const activePageIndex = useComponentsStore(state => state.activePageIndex);

  const [animRef] = useAutoAnimate();
  const { properties } = item;

  const handleClick = () => {
    onClick?.(item);
  };

  if (activePageIndex !== position) {
    return null;
  }

  const isHidden = properties?.hidden;

  return (
    <Stack spacing={1}>
      <Typography variant="body1" onClick={handleClick}>{item.name}</Typography>
      {!isHidden && <Stack ref={animRef} spacing={2}>
        {children}
      </Stack>}
    </Stack>
  );
};
