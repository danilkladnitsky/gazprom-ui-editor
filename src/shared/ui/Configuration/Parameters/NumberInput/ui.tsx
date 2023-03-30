import React from "react";

import { TextField } from "@mui/material";
import { NumberParameter } from "entities/parameter";

import styles from "../styles.module.scss";

type Props = {
  element: NumberParameter;
  name: string;
};

export const NumberInput = ({ element, name }: Props) => {
  const { maxValue, minValue } = element.properties || {};

  return <TextField label={name} type="number" className={styles.input} />;
};
