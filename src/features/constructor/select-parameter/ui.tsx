import React from "react";

import { useParameterModel } from "entities/parameter";
import List from "shared/ui/List/List";

export const SelectParameter = () => {
  const parameterModel = useParameterModel();

  return <List data={parameterModel.parameters.map((p) => ({ item: p }))} />;
};
