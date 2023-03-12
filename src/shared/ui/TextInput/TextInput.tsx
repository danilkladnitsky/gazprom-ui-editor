import React from "react";

import { TextField, TextFieldProps } from "@mui/material";

import styles from "./styles.module.scss";

export const TextInput = ({ ...rest }: TextFieldProps) => {
  return <TextField className={styles.input} {...rest} />;
};
