import React, { ChangeEvent } from "react";

import { Button } from "@mui/material";
import { Upload as UploadIcon } from "@mui/icons-material";
import { useAppConfigurationModel } from "entities/app-configuration";

export const UploadConfiguration = () => {
  const uploadConfiguration = useAppConfigurationModel(
    (state) => state.uploadConfiguration
  );

  const uploadJson = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];

    uploadConfiguration(file);
    e.target.value = null;
  };

  return (
    <Button startIcon={<UploadIcon />} component="label">
      <input hidden accept="txt/*" multiple type="file" onChange={uploadJson} />
      Загрузить
    </Button>
  );
};
