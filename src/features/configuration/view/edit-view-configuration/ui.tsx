import React from "react";

import { renderRecursiveTree } from "features/configuration/render/render-component-tree";

import styles from "./styles.module.scss";

import { useAppConfigurationModel } from "entities/app-configuration";
import { UploadConfiguration } from "../../actions/upload-configuration";

export const EditViewConfiguration = () => {
  const jsonConfiguration = useAppConfigurationModel(
    (state) => state.configuration
  );

  if (!jsonConfiguration) {
    return (
      <div className={styles.uploadFallback}>
        <UploadConfiguration />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {renderRecursiveTree(jsonConfiguration)}
    </div>
  );
};
