import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

import { ElementProps } from './types';

const OPTIONS = ['VALUE1', 'VALUE2', 'VALUE3', 'VALUE4', 'VALUE5'];

export const Combobox = ({ element }: ElementProps) => {

  return (
    <Autocomplete
      disablePortal
      options={OPTIONS}
      renderInput={(params) => <TextField
        {...params}
        label={element.properties?.title || element.name}
      />}
    />
  );
};
