import React from "react";

import { Checkbox as MuiCheckbox, CheckboxProps } from "@mui/material";

import styles from "./styles.module.scss";

export const Checkbox = ({ name, ...rest }: CheckboxProps) => {
  return (
    <div className={styles.wrapper}>
      <MuiCheckbox disableRipple className={styles.checkbox} {...rest} />
      {name}
    </div>
  );
};
