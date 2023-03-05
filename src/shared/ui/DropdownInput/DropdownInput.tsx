import React from 'react'

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export type DropdownItem = {
  value: string;
  label: string;
};

type Props = {
  name: string;
  list: DropdownItem[];
  id?: string;
}

export const DropdownInput = ({ list, name, id = name }: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{name}</InputLabel>
        <Select
          labelId={id}
          id={id}
          label={name}
        >
          {list.map(item => <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>)}
        </Select>
  </FormControl>);
}