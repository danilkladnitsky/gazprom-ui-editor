import React from "react";

import { useAppConfigurationModel } from "entities/app-configuration";

import { RecursiveTree } from "features/configuration/render/render-component-tree";
import TreeItem from "features/configuration/render/render-component-tree/TreeItem";

import styles from "./styles.module.scss";

export const EditViewConfiguration = () => {
  const { configuration } = useAppConfigurationModel();

  return (
    <div className={styles.wrapper}>
      {configuration && (
        <RecursiveTree tree={configuration} template={TreeItem} />
      )}
    </div>
  );
};
