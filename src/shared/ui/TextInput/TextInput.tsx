import React from "react";

import { TextField, TextFieldProps } from "@mui/material";

import styles from "./styles.module.scss";

type Props =
  | TextFieldProps
  | {
      onChange?: (value: string) => void;
    };

export const TextInput = ({ onChange, ...rest }: Props) => {
  const handleOnChange = (e) => {
    onChange && onChange(e.target.value);
  };

  return (
    <TextField className={styles.input} onChange={handleOnChange} {...rest} />
  );
};
