import React from "react";

import { useAppConfigurationModel } from "entities/app-configuration";

import styles from "./styles.module.scss";
import { RecursiveTree } from "features/configuration/render/render-component-tree";
import JsonElement from "shared/ui/JsonElement/JsonElement";
import { useComponentModel } from "entities/component";
import { DatasourceComponent } from "features/render/component";

export const EditJsonConfiguration = () => {
  const configuration = useAppConfigurationModel(
    (state) => state.configuration
  );

  const { deselectComponent, selectedComponent } = useComponentModel();

  return (
    <div className={styles.schema} onClick={deselectComponent}>
      <div className={styles.jsonPreview}>
        <RecursiveTree tree={configuration} template={JsonElement} />
      </div>
      <div className={styles.preview}>
        {selectedComponent?.code === "element" && (
          <div className={styles.previewComponent}>
            <DatasourceComponent {...selectedComponent} />
          </div>
        )}
      </div>
    </div>
  );
};
