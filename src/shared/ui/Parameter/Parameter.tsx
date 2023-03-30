import React from "react";

import { Button } from "@mui/material";

import { Parameter as ParameterType } from "entities/parameter";

import styles from "./styles.module.scss";

export type ParameterProps = ParameterType;

export const Parameter = ({ name }: ParameterProps) => {
  return (
    <Button className={styles.parameter} size="medium" variant="text">
      Параметр: {name}
    </Button>
  );
};
