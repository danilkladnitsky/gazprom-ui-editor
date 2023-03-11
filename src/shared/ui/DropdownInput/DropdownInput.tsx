import React from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type ItemValue = string | number;

export type DropdownItem<V> = {
  value: V;
  label: string;
};

type Props<V> = {
  name: string;
  list: DropdownItem<V>[];
  onChange: (value: V) => void;
  id?: string;
};

export const DropdownInput = <V extends ItemValue>
  ({ list, name, id = name, onChange }: Props<V>) => {
  
  const handleOnChange = (value: V) => {
    onChange(value);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{name}</InputLabel>
      <Select labelId={id} id={id} label={name} onChange={handleOnChange}>
        {list.map((item) => (
          <MenuItem value={item.value} key={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
