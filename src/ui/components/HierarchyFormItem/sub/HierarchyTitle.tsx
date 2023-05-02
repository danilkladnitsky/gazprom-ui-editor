import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { getComponentIcon } from 'ui/utils/getComponentIcon';

import { IComponent } from 'domain/component';

import styles from './HierarchyTitle.module.scss';

type Props = {
  item: IComponent;
}

export const HierarchyTitle = ({ item }: Props) => {
  const Icon = getComponentIcon(item);

  return (
    <Stack direction={'row'} spacing={1}>
      <Icon color="info" />
      <Typography variant="body2">{item.name}</Typography>
    </Stack>
  );
};
