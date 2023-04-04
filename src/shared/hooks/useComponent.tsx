import { useComponentModel } from "entities/component";
import { Component } from "entities/component/domain";

export const useComponent = <T extends Component>(
  componentId?: EntityId
): T | undefined => {
  const components = useComponentModel((state) => state.components);

  return components.find((c) => c.id === componentId) as T;
};
