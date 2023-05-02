import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { IComponent } from 'domain/component';

import { getComponentIcon } from 'shared/utils/getComponentIcon';

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
