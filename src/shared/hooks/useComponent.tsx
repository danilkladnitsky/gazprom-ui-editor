import { useComponentModel } from "entities/component";

export const useComponent = <T,>(componentId?: EntityId): T | undefined => {
  const components = useComponentModel((state) => state.components);

  return components.find((c) => c.id === componentId) as T;
};
