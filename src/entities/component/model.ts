import { Parameter } from "entities/parameter/domain";
import { generateEntityId } from "shared/utils/generateIds";
import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";
import { Component, ComponentForm, DatasourceComponent } from "./domain";

interface ComponentState {
  selectedComponent: DatasourceComponent | null;
  components: Component[];
  updateSelectedComponent: (component: Component) => void;
  selectComponent: (id: EntityId) => void;
  createComponentsFromParameters: (
    parameters: Parameter[]
  ) => DatasourceComponent[];
}

export const useComponentModel = create<ComponentState>((set) => ({
  selectedComponent: null,
  components: [],
  selectComponent: (id: EntityId) => {
    set((state) => ({
      selectedComponent: state.components.find((c) => c.id === id),
    }));
  },
  updateSelectedComponent: (selectedComponent: Component) =>
    set((state) => {
      const components = state.components.map((c) =>
        c.id === selectedComponent.id ? selectedComponent : c
      );

      return { components, selectedComponent };
    }),
  createComponentsFromParameters: (parameters: Parameter[]) => {
    const components: DatasourceComponent[] = parameters.map((param) => ({
      dataSource: param,
      id: generateEntityId(),
      code: "element",
      name: `Компонент ${param.type}`,
    }));

    // create root
    const rootComponent: ComponentForm = {
      code: "form",
      id: generateEntityId(),
      name: "Форма",
    };

    const result = [rootComponent, ...components];

    set({ components: result });

    return result;
  },
}));
