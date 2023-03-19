import React from "react";

import { useComponentModel } from "entities/component";
import { renderRecursiveTree } from "features/configuration/render-component-tree";

import styles from "./styles.module.scss";

import tree from "shared/metadata/form.json";

export const EditViewConfiguration = () => {
  const { selectedComponent } = useComponentModel();

  if (!selectedComponent) {
    return <></>;
  }

  return <div className={styles.wrapper}>{renderRecursiveTree(tree)}</div>;
};
