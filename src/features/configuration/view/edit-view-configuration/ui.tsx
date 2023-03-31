import React from "react";

import { RecursiveTree } from "features/configuration/render/render-component-tree";
import { useAppConfigurationModel } from "entities/app-configuration";

import styles from "./styles.module.scss";
import TreeItem from "features/configuration/render/render-component-tree/components/TreeItem";

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
