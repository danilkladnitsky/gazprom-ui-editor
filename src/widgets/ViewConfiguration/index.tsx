import React from "react";

import { EditJsonConfiguration } from "features/configuration/edit-json-configuration";
import { EditorActions } from "features/configuration/editor-actions";
import { ConfigurationView, useAppConfigurationModel } from "entities/app-configuration";
import { EditViewConfiguration } from "features/configuration/edit-view-configuration";

import styles from "./styles.module.scss";

const ViewConfiguration = () => {
  const view = useAppConfigurationModel((state) => state.view);

  return (
    <div className={styles.configuration}>
      {
        view === ConfigurationView.TEXT_VIEW
        ? <EditJsonConfiguration />
        : <EditViewConfiguration />
      }
      <EditorActions className={styles.actions} />
    </div>
  );
};

export default ViewConfiguration;
