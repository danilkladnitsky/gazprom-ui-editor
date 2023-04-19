import { Button } from "@mui/material";
import React from "react";

export const File = () => {
  return (
    <Button title="Загрузить файл">
      <input type="file" hidden />
    </Button>
  );
};
