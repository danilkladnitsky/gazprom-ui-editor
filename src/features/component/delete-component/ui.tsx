import React from "react";

import { DeleteSweep } from "@mui/icons-material";
import { Button } from "@mui/material";

import { useAppConfigurationModel } from "entities/app-configuration";

type Props = {
  id: EntityId;
};
const DeleteComponent = ({ id }: Props) => {
  const { deleteComponent } = useAppConfigurationModel();

  const handleDelete = () => {
    deleteComponent(id);
  };
  return (
    <Button startIcon={<DeleteSweep />} onClick={handleDelete}>
      Удалить компонент
    </Button>
  );
};

export default DeleteComponent;
