import { Grid, Typography } from "@mui/material";
import React from "react";

import styles from "./Group.module.scss";
import { GroupProps } from "./types";

export const Group = ({ children, component }: GroupProps) => {
  const { direction, name } = component;

  return (
    <div className={styles.groupWrapper}>
      {name && <Typography variant="subtitle1">{name}</Typography>}
      <Grid className={styles.group} direction={direction || "column"}>
        {children}
      </Grid>
    </div>
  );
};
