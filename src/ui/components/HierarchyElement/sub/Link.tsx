import React from 'react';
import { Link as MuiLink } from '@mui/material';

import { ElementProps } from './types';

export const Link = ({ element }: ElementProps) => {
  const { properties, name } = element;
  return (
    <MuiLink>{
      properties?.title || name
    }</MuiLink>
  );
};
