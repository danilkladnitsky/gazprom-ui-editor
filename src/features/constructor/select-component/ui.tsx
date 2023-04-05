import React from "react";

import List from "shared/ui/List/List";
import ComponentElement from "shared/ui/ComponentElement/ComponentElement";

import { useComponentModel } from "entities/component";

export const SelectComponent = () => {
  const { components } = useComponentModel();

  const list = components
    .filter((c) => c.code === "element")
    .map((item) => ({ item }));

  return <List data={list} listItem={ComponentElement} />;
};
