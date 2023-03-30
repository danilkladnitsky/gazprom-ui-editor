import { CheckboxParameter } from "entities/parameter";
import { Checkbox as UICheckbox } from "shared/ui/Checkbox";
import React from "react";

import styles from "../styles.module.scss";

type Props = {
  element: CheckboxParameter;
  name: string;
};

export const Checkbox = ({ element, name }: Props) => {
  const { properties } = element;
  const { isChecked } = properties || {};

  return (
    <UICheckbox checked={isChecked} name={name} className={styles.input} />
  );
};
