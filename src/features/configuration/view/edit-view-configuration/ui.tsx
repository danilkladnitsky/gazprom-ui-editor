import React from "react";

import { renderRecursiveTree } from "features/configuration/render/render-component-tree";
import { useAppConfigurationModel } from "entities/app-configuration";

import styles from "./styles.module.scss";
import { useComponentModel } from "entities/component";

export const EditViewConfiguration = () => {
  const jsonConfiguration = useAppConfigurationModel(
    (state) => state.configuration
  );

  const { components } = useComponentModel();

  return (
    <div className={styles.wrapper}>
      {renderRecursiveTree(jsonConfiguration)}
    </div>
  );
};
