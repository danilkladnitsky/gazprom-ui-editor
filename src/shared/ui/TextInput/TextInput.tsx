import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

import styles from "./styles.module.scss";

export const TextInput = ({ ...rest }: TextFieldProps) => {
  return <TextField className={styles.input} {...rest} />;
};
