import { TextField } from "@mui/material";
import { DateParameter } from "entities/parameter";
import React from "react";

import styles from "../styles.module.scss";

type Props = {
  element: DateParameter;
  name: string;
};

export const DateInput = ({ element, name }: Props) => {
  return (
    <TextField
      type="date"
      label={name}
      value={new Date()}
      className={styles.input}
    />
  );
};
