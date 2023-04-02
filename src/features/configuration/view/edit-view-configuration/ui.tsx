import React from "react";

import { useAppConfigurationModel } from "entities/app-configuration";

import { RecursiveTree } from "features/configuration/render/render-component-tree";
import TreeItem from "features/configuration/render/render-component-tree/TreeItem";

import styles from "./styles.module.scss";
import { withWatching } from "shared/hocs";

export const EditViewConfiguration = () => {
  const jsonConfiguration = useAppConfigurationModel(
    (state) => state.configuration
  );

  const guiMode = useAppConfigurationModel((state) => state.guiMode);

  const template = guiMode === "edit" ? withWatching(TreeItem) : TreeItem;

  return (
    <div className={styles.wrapper}>
      {jsonConfiguration && (
        <RecursiveTree tree={jsonConfiguration} template={template} />
      )}
    </div>
  );
};
