import { Parameter } from "entities/parameter/domain";
import { generateEntityId } from "shared/utils/generateIds";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Component, ComponentForm, DatasourceComponent } from "./domain";

interface ComponentState {
  selectedComponent: Component | null;
  components: Component[];
  updateSelectedComponent: (component: Component) => void;
  selectComponent: (id: EntityId) => void;
  deselectComponent: () => void;
  createComponentsFromParameters: (
    parameters: Parameter[]
  ) => DatasourceComponent[];
  duplicateComponent: (id: EntityId) => Component | null;
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

          const currentComponent = components.find(
            (c) => c.id === selectedComponent.id
          );

          const updatedComponent = {
            ...currentComponent,
            ...selectedComponent,
          };

          console.log(selectedComponent, updatedComponent);

          return { components, selectedComponent: updatedComponent };
        }),
      createComponentsFromParameters: (parameters: Parameter[]) => {
        const components: DatasourceComponent[] = parameters.map((param) => ({
          dataSource: param,
          id: generateEntityId(),
          code: "element",
          name: `Компонент ${param.type}`,
          timestamp: Date.now(),
        }));

        // create root
        const rootComponent: ComponentForm = {
          code: "form",
          id: generateEntityId(),
          name: "Форма",
          timestamp: Date.now(),
        };

        const result = [rootComponent, ...components];

        set({ components: result });

        return result;
      },
      swapComponents: (firstId: EntityId, secondId: EntityId) => {
        set((state) => {
          const firstComponent = state.components.find((c) => c.id === firstId);
          const secondComponent = state.components.find(
            (c) => c.id === secondId
          );
          const components = state.components.map((c) => {
            if (c.id === firstId) {
              return secondComponent;
            }

            if (c.id === secondId) {
              return firstComponent;
            }

            return c;
          });

          return { components };
        });
      },
      duplicateComponent: (id: EntityId) => {
        const { components } = get();
        const original = components.find((c) => c.id === id);

        if (!original) {
          return null;
        }

        const newComponent = {
          ...original,
          name: original.name,
          id: generateEntityId(),
          timestamp: Date.now(),
        };

        set({
          components: [...components, newComponent],
          selectedComponent: newComponent,
        });

        return newComponent;
      },
      deselectComponent: () => {
        set({ selectedComponent: null });
      },
    }),
    {
      name: "component-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
