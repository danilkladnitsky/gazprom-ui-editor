import React from "react";
import { enqueueSnackbar } from "notistack";

import { useUploadFile } from "shared/hooks/uploadFile";
import { Parameter, useParameterModel } from "entities/parameter";

import { Button } from "@mui/material";
import { Upload as UploadIcon } from "@mui/icons-material";
import { useAppConfigurationModel } from "entities/app-configuration";

const UploadParameters = () => {
  const { loadParameters } = useParameterModel();
  const { generateConfigurationFromParameters } = useAppConfigurationModel();

  const handleLoadParameters = (data: Parameter[]) => {
    loadParameters(data);
    generateConfigurationFromParameters(data);
    enqueueSnackbar("Стандартная форма была сгенерирована");
  };

  const [, uploadFile] = useUploadFile(handleLoadParameters);

  return (
    <Button startIcon={<UploadIcon />} component="label">
      <input hidden accept="txt/*" multiple type="file" onChange={uploadFile} />
      Загрузить параметры
    </Button>
  );
};

export default UploadParameters;
