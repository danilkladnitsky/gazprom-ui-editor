import React from "react";
import { IParameter } from "entities/interfaces/parameter";
import { useParametersStore } from "store/parameterStore";
import List, { ListItemProps } from "ui/List/List";

const convertToList = (parameters: IParameter[]): ListItemProps[] => {
  return parameters.map((p) => ({ item: { id: p.code, name: p.name } }));
};

export const ParametersList = () => {
  const { parameters } = useParametersStore();

  return <List data={convertToList(parameters)} />;
};
