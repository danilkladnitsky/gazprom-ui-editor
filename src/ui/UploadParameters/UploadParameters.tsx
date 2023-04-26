import React, { ChangeEvent } from "react";
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
    <Button>
      <input
        hidden
        accept="txt/*"
        multiple
        type="file"
        onChange={handleFileUpload}
      />
      Загрузить параметры
    </Button>
  );
};
