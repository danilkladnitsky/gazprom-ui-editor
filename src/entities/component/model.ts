import { Parameter } from "entities/parameter/domain";
import { generateEntityId } from "shared/utils/generateIds";
import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";
import { Component, DatasourceComponent } from "./domain";

interface ComponentState {
  selectedComponent: Component | null;
  components: Component[];
  updateSelectedComponent: (component: Component) => void;
  selectComponent: (code: EntityId) => void;
  createComponentsFromParameters: (
    parameters: Parameter[]
  ) => DatasourceComponent[];
}

export const useComponentModel = create(
  persist<ComponentState>(
    (set) => ({
      selectedComponent: null,
      components: [],
      selectComponent: (code: EntityId) =>
        set((state) => {
          return {
            selectedComponent: state.components.find((c) => c.code === code),
          };
        }),
      updateSelectedComponent: (updatedComponent: Component) => {
        set((state) => {
          const component = state.selectedComponent;
          if (!component) return state;

          return {
            ...state,
            selectedComponent: { ...component, ...updatedComponent },
          };
        });
      },
      createComponentsFromParameters: (parameters: Parameter[]) => {
        const components: DatasourceComponent[] = parameters.map((param) => ({
          dataSource: param,
          id: generateEntityId(),
          code: "element",
          name: `Компонент ${param.type}`,
        }));

        set({ components });

        return components;
      },
    }),
    {
      name: "component-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
