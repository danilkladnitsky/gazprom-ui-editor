import React from "react";

import { TextField } from "@mui/material";

import styles from "../styles.module.scss";
import { TextareaParameter } from "entities/parameter/domain";

type Props = {
  element: TextareaParameter;
  name: string;
};

export const TextArea = ({ element, name }: Props) => {
  const { properties } = element;

  const { lineCount } = properties || {};

  return (
    <TextField
      className={styles.input}
      label={name}
      multiline
      minRows={lineCount || 3}
    />
  );
};
