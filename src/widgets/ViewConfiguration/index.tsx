import React from "react";

import { EditJsonConfiguration } from "features/configuration/view/edit-json-configuration";
import { EditViewConfiguration } from "features/configuration/view/edit-view-configuration";

import { useAppConfigurationModel } from "entities/app-configuration";

import styles from "./styles.module.scss";
import UploadParameters from "features/configuration/actions/upload-parameters/ui";
import { ConfigurationView } from "entities/app-configuration/domain";

const ViewConfiguration = () => {
  const { view, configuration } = useAppConfigurationModel();

  const getContent = () => {
    if (!configuration) {
      return (
        <div className={styles.uploadFallback}>
          <UploadParameters />
        </div>
      );
    }

    return view === ConfigurationView.TEXT_VIEW ? (
      <EditJsonConfiguration />
    ) : (
      <EditViewConfiguration />
    );
  };

  return <div className={styles.configuration}>{getContent()}</div>;
};

export default ViewConfiguration;
