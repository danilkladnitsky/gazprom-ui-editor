import { useParameterModel } from "entities/parameter";
import React from "react";
import { ParametersList } from "shared/ui/Parameter/ParametersList";

export const SelectParameter = () => {
  const parameterModel = useParameterModel();

  return <ParametersList list={parameterModel.parameters} />;
};
