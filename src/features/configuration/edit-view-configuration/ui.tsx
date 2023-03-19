import React from "react";

import { useComponentModel } from "entities/component";
import { renderRecursiveTree } from "features/configuration/render-component-tree";

import styles from "./styles.module.scss";

import { useAppConfigurationModel } from "entities/app-configuration";

export const EditViewConfiguration = () => {
  const jsonConfiguration = useAppConfigurationModel(
    (state) => state.configuration
  );

  if (!jsonConfiguration) {
    return <></>;
  }

  return <div className={styles.wrapper}>{renderRecursiveTree(jsonConfiguration)}</div>;
};
