import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

import { ElementProps } from './types';

export const Radiogroup = ({ element }: ElementProps) => {
  const title = element.properties?.title || element.name;

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
};
