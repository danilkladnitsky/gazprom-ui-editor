import React from "react";

import { useAppConfigurationModel } from "entities/app-configuration";

import { RecursiveTree } from "features/configuration/render/render-component-tree";
import TreeItem from "features/configuration/render/render-component-tree/components/TreeItem";

import styles from "./styles.module.scss";

export const EditViewConfiguration = () => {
  const jsonConfiguration = useAppConfigurationModel(
    (state) => state.configuration
  );

  return (
    <div className={styles.wrapper}>
      {jsonConfiguration && (
        <RecursiveTree tree={jsonConfiguration} template={TreeItem} />
      )}
    </div>
  );
};
