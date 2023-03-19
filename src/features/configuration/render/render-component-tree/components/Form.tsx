import React from "react";

import { Typography } from "@mui/material";

import { ComponentProps } from "./types";

import styles from "./Form.module.scss";

export const Form = ({ children, component }: ComponentProps) => {
  const { name, description } = component;

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{description}</Typography>
      </div>
      {children}
    </div>
  );
};
