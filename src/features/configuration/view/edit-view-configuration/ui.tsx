import React from "react";

import { withWatching } from "shared/hocs";

import { useAppConfigurationModel } from "entities/app-configuration";

import { RecursiveTree } from "features/configuration/render/render-component-tree";
import TreeItem from "features/configuration/render/render-component-tree/TreeItem";

import styles from "./styles.module.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const EditViewConfiguration = () => {
  const { configuration } = useAppConfigurationModel();

  return (
    <div className={styles.wrapper}>
      <DndProvider backend={HTML5Backend}>
        {configuration && (
          <RecursiveTree tree={configuration} template={TreeItem} />
        )}
      </DndProvider>
    </div>
  );
};
