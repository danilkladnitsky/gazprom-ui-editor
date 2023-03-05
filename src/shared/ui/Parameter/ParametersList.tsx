import React from "react";
import { Parameter, ParameterProps } from "./Parameter";

import styles from "./styles.module.scss";

type Props = {
  list: ParameterProps[];
};

export const ParametersList = ({ list }: Props) => {
  return (
    <div className={styles.list}>
      {list.map((param) => (
        <Parameter {...param} />
      ))}
    </div>
  );
};
