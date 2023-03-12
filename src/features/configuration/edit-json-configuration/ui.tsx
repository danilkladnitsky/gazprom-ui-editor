import React from "react";
import ReactJson from "react-json-view";

import { useAppConfigurationModel } from "entities/app-configuration";
import Loader from "shared/ui/Loader/Loader";

import styles from "./styles.module.scss";

export const EditJsonConfiguration = () => {
  const jsonConfiguration = useAppConfigurationModel(
    (state) => state.configuration
  );

  const loadConfigurationStatus = useAppConfigurationModel(
    (state) => state.loadConfigurationStatus
  );

  const isLoading = loadConfigurationStatus === "loading";

  return (
    <div className={styles.schema}>
      {isLoading ? (
        <Loader size={70} />
      ) : (
        <ReactJson
          src={jsonConfiguration || {}}
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
