import { CheckboxParameter } from "entities/parameter";
import { Checkbox as UICheckbox } from "shared/ui/Checkbox";
import React from "react";

import styles from "./styles.module.scss";

type Props = {
  element: CheckboxParameter;
};

export const Checkbox = ({ element }: Props) => {
  const { properties, name } = element;
  const { isChecked } = properties || {};

  return <UICheckbox checked={isChecked} name={name} />;
};
