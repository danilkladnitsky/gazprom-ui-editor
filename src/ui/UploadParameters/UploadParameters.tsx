import React, { ChangeEvent } from "react";
import { Upload as UploadIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useParametersStore } from "store/parameterStore";

export const UploadParameters = () => {
  const { parseFromFile } = useParametersStore();

  const handleFileUpload = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files) {
      return;
    }

    const file = target.files[0];
    parseFromFile(file);
  };

  return (
    <Button startIcon={<UploadIcon />} component="label">
      <input hidden accept="txt/*" type="file" onChange={handleFileUpload} />
      Загрузить параметры
    </Button>
  );
};
