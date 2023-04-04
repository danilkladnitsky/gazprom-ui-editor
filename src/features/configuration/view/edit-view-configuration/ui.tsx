import React, { useEffect } from "react";

import { useAppConfigurationModel } from "entities/app-configuration";

import { RecursiveTree } from "features/configuration/render/render-component-tree";
import TreeItem from "features/configuration/render/render-component-tree/TreeItem";

import styles from "./styles.module.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useComponentModel } from "entities/component";

export const EditViewConfiguration = () => {
  const { configuration, generateAppConfig } = useAppConfigurationModel();
  const { components } = useComponentModel();

  useEffect(() => {
    generateAppConfig(components);
  }, [components]);

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
