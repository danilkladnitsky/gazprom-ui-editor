import React from "react";
import { enqueueSnackbar } from "notistack";

import { useUploadFile } from "shared/hooks/uploadFile";
import { useParameterModel } from "entities/parameter";

import { Button } from "@mui/material";
import { Upload as UploadIcon } from "@mui/icons-material";
import { useAppConfigurationModel } from "entities/app-configuration";
import { useComponentModel } from "entities/component";
import { pipe } from "shared/utils/functionalCore";
import { InputParameter } from "entities/parameter/domain";

const UploadParameters = () => {
  const { loadParameters } = useParameterModel();
  const { createComponentsFromParameters: genenerateComponents } =
    useComponentModel();
  const { generateConfigFromDatasourceComponents: generateTree } =
    useAppConfigurationModel();

  const handleLoadParameters = (data: InputParameter[]) => {
    pipe(loadParameters, genenerateComponents, generateTree)(data);

    enqueueSnackbar("Стандартная форма была сгенерирована");
  };

  const [, uploadFile] = useUploadFile<InputParameter[]>(handleLoadParameters);

  return (
    <Button startIcon={<UploadIcon />} component="label">
      <input hidden accept="txt/*" multiple type="file" onChange={uploadFile} />
      Загрузить параметры
    </Button>
  );
};

export default UploadParameters;
