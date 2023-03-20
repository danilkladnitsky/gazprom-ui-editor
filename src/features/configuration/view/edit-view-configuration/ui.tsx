import React from "react";

import { renderRecursiveTree } from "features/configuration/render/render-component-tree";
import { useAppConfigurationModel } from "entities/app-configuration";

import styles from "./styles.module.scss";

export const EditViewConfiguration = () => {
  const jsonConfiguration = useAppConfigurationModel(
    (state) => state.configuration
  );

  return (
    <div className={styles.wrapper}>
      {renderRecursiveTree(jsonConfiguration)}
    </div>
  );
};
