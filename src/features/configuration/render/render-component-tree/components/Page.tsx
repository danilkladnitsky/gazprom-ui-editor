import { Container } from "@mui/system";
import React from "react";

import styles from "./Page.module.scss";
import { ComponentProps } from "./types";

export const Page = ({ children }: ComponentProps) => {
  return <Container className={styles.page}>{children}</Container>;
};
