import React, { ReactNode } from "react";
import { Typography } from "@mui/material";

import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => {
  return (
    <Typography variant="body1" className={styles.header}>
      {children}
    </Typography>
  );
};
