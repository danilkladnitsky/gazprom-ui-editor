import React, { useMemo, useState } from "react";

import ReactJson from "react-json-view";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

import { useAppConfigurationModel } from "entities/app-configuration";
import Loader from "shared/ui/Loader/Loader";

import styles from "./styles.module.scss";

export const EditJsonConfiguration = () => {
  const jsonConfiguration = useAppConfigurationModel(
    (state) => state.configuration
  );

  const uploadConfigurationStatus = useAppConfigurationModel(
    (state) => state.uploadConfigurationStatus
  );

  const updateConfiguration = useAppConfigurationModel(
    (state) => state.updateConfiguration
  );

  const isLoading = uploadConfigurationStatus === "loading";

  const handleConfigurationUpdate = (e) => {
    const { error, jsObject } = e;

    if (!error) {
      updateConfiguration(jsObject);
    }
  };

  if (isLoading) {
    return <Loader size={70} />;
  }

  const Content = useMemo(() => {
    if (isLoading) {
      return <Loader size={70} />;
    }

    return (
      <JSONInput
        placeholder={jsonConfiguration}
        locale={locale}
        onChange={handleConfigurationUpdate}
      />
    );
  }, [isLoading, jsonConfiguration]);

  return <div className={styles.schema}>{Content}</div>;
};
