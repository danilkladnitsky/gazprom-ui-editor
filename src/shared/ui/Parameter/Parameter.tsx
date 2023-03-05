import React, { ReactNode } from "react";

import { Button } from "@mui/material";

import { Parameter as ParameterType } from "entities/parameter";

import styles from "./styles.module.scss";

export type ParameterProps = ParameterType;

export const Parameter = ({ label, type }: ParameterProps) => {
  return (
    <Button className={styles.parameter} size="medium" variant="text">
      Параметр: {label}
    </Button>
  );
};
