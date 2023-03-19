import React from "react";

import { EditJsonConfiguration } from "features/configuration/view/edit-json-configuration";
import { EditViewConfiguration } from "features/configuration/view/edit-view-configuration";

import { ConfigurationView, useAppConfigurationModel } from "entities/app-configuration";

import styles from "./styles.module.scss";

const ViewConfiguration = () => {
  const view = useAppConfigurationModel((state) => state.view);

  return (
    <div className={styles.configuration}>
      {view === ConfigurationView.TEXT_VIEW ? (
        <EditJsonConfiguration />
      ) : (
        <EditViewConfiguration />
      )}
    </div>
  );
};

export default ViewConfiguration;
