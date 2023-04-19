import React from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type ItemValue = string;

export type DropdownItem = {
  value: ItemValue;
  label: string;
};

type Props = {
  name: string;
  list: DropdownItem[];
  onChange: (value: ItemValue) => void;
  id?: string;
  value?: ItemValue;
};

export const DropdownInput = ({
  list,
  name,
  id = name,
  onChange,
  value,
}: Props) => {
  const handleOnChange = (value: ItemValue) => {
    onChange(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{name}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        label={name}
        onChange={(e) => handleOnChange(e.target.value as ItemValue)}
      >
        {list.map((item) => (
          <MenuItem value={item.value} key={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
