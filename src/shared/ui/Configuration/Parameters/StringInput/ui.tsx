import React from "react";

import { TextField } from "@mui/material";
import { StringParameter } from "entities/parameter";

import styles from "../styles.module.scss";

type Props = {
  element: StringParameter;
  name: string;
};

export const StringInput = ({ element, name }: Props) => {
  const { properties } = element;

  const { multiline, lineCount } = properties || {};

  return (
    <TextField
      className={styles.input}
      label={name}
      multiline={multiline}
      minRows={lineCount}
    />
  );
};
