import { useComponentModel } from "entities/component";
import React from "react";
import List from "shared/ui/List/List";

export const SelectComponent = () => {
  const { components } = useComponentModel();

  return <List data={components} />;
};
