import React from "react";

import { TextField } from "@mui/material";

import styles from "../styles.module.scss";
import { StringParameter } from "entities/parameter/domain";

type Props = {
  element: StringParameter;
  name: string;
};

export const StringInput = ({ element, name }: Props) => {
  return <TextField className={styles.input} label={name} />;
};
