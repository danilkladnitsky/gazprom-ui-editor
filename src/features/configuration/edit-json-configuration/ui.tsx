import React from "react";
import ReactJson from "react-json-view";

import { useAppConfigurationModel } from "entities/app-configuration";
import Loader from "shared/ui/Loader/Loader";

import styles from "./styles.module.scss";
import { useComponentModel } from "entities/component";

export const EditJsonConfiguration = () => {
  const jsonConfiguration = useAppConfigurationModel(
    (state) => state.configuration
  );

  const loadConfigurationStatus = useAppConfigurationModel(
    (state) => state.loadConfigurationStatus
  );

  const selectedComponent = useComponentModel();

  const isLoading = loadConfigurationStatus === "loading";

  return (
    <div className={styles.schema}>
      {isLoading ? (
        <Loader size={70} />
      ) : (
        <ReactJson
          src={selectedComponent.selectedComponent || {}}
          collapsed={false}
          displayDataTypes={false}
          displayObjectSize={false}
          enableClipboard={false}
          displayArrayKey={false}
          name="config"
        />
      )}
    </div>
  );
};
