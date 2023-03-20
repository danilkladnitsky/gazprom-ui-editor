import React from "react";

import { Button } from "@mui/material";
import { Upload as UploadIcon } from "@mui/icons-material";
import { useAppConfigurationModel } from "entities/app-configuration";
import { useUploadFile } from "shared/hooks/uploadFile";

export const UploadConfiguration = () => {
  const uploadConfiguration = useAppConfigurationModel(
    (state) => state.uploadConfiguration
  );

  const [config, uploadFile] = useUploadFile(uploadConfiguration);

  return (
    <Button startIcon={<UploadIcon />} component="label">
      <input hidden accept="txt/*" multiple type="file" onChange={uploadFile} />
      Загрузить форму
    </Button>
  );
};
