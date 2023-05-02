import React, { Ref } from 'react';
import { Typography } from '@mui/material';

import { IComponent } from 'domain/component';

type Props = {
  item: IComponent;
}

export const HierarchyTitle = ({ item }: Props) => {
  return (
    <Typography variant="body1">{item.name}</Typography>
  );
};
