import React from "react";

import { renderRecursiveTree } from "features/configuration/render/render-component-tree";
import { useAppConfigurationModel } from "entities/app-configuration";
import UploadParameters from "features/configuration/actions/upload-parameters/ui";

import styles from "./styles.module.scss";

export const EditViewConfiguration = () => {
  const jsonConfiguration = useAppConfigurationModel(
    (state) => state.configuration
  );

  if (!jsonConfiguration) {
    return (
      <div className={styles.uploadFallback}>
        <UploadParameters />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {renderRecursiveTree(jsonConfiguration)}
    </div>
  );
};
