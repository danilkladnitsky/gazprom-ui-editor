import { TextField } from "@mui/material";
import { DateParameter } from "entities/parameter";
import React from "react";

import styles from "../styles.module.scss";

type Props = {
  element: DateParameter;
};

export const DateInput = ({ element }: Props) => {
  const { name } = element;

  return <TextField type="date" label={name} value={new Date()} className={styles.input} />;
};
