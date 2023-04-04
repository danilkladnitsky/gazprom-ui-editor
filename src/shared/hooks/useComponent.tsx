import React from "react";

import { useComponentModel } from "entities/component";
import { Component } from "entities/component/domain";

export const useComponent = (componentId: EntityId) => {
  const components = useComponentModel((state) => state.components);

  return components.find((c) => c.id === componentId) || ({} as Component);
};
