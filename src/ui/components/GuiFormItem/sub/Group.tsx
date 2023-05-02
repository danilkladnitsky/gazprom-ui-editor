import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Typography } from '@mui/material';
import { Stack, StackProps } from '@mui/system';

import { IGroup } from 'domain/component';

import { ViewFormItemProps } from './types';

const mapGroupModeToCss =(align: string): StackProps => {
  switch (align) {
  case 'FORCE_HORIZONTAL':
    return { direction: 'row' };
  case 'HORIZONTAL':
    return { useFlexGap: true, rowGap: 2, flexWrap: 'wrap', direction: 'row' };
  case 'VERTICAL':
  default:
    return { direction: 'column' };
  }
};
export const Group = ({ item, children, onClick }: ViewFormItemProps<IGroup>) => {
  const [animRef] = useAutoAnimate();

  const { properties } = item;

  const handleClick = () => {
    onClick?.(item);
  };

  const isHidden = properties?.hidden;

  return (
    <Stack spacing={1}>
      <Typography variant="body1" onClick={handleClick}>{item.name}</Typography>
      {!isHidden &&
        <Stack spacing={2} {...mapGroupModeToCss(properties?.direction || 'VERTICAL')} ref={animRef}>
          {children}
        </Stack>}
    </Stack>
  );
};
