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
  swapComponents: (firstId: EntityId, secondId: EntityId) => void;
}

export const useComponentModel = create(
  persist<ComponentState>(
    (set, get) => ({
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
      swapComponents: (firstId: EntityId, secondId: EntityId) => {
        set((state) => {
          const idsToSwap = [firstId, secondId];
          const components = state.components.map((c) => {
            const swap = idsToSwap.includes(c.id);

            if (swap) {
              return { ...c, id: c.id === firstId ? secondId : firstId };
            }
            return c;
          });

          return { components };
        });
      },
    }),
    {
      name: "component-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
