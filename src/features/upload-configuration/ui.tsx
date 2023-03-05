import React from "react";

import { Button } from "@mui/material";
import { Upload as UploadIcon } from "@mui/icons-material";
import { useAppConfigurationModel } from "entities/app-configuration";

export const UploadConfiguration = () => {
  const appConfigurationModel = useAppConfigurationModel();

  return (
    <Button startIcon={<UploadIcon />} component="label">
      <input hidden accept="image/*" multiple type="file" /> Загрузить
    </Button>
  );
};
