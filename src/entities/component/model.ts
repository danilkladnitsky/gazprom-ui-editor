import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";
import { Component } from "./domain";

interface ComponentState {
  selectedComponent: Component | null;
  components: Component[];
  updateSelectedComponent: (component: Component) => void;
  selectComponent: (code: EntityId) => void;
}

export const useComponentModel = create(
  persist<ComponentState>(
    (set) => ({
      selectedComponent: null,
      components: [],
      selectComponent: (code: EntityId) =>
        set((state) => ({
          selectedComponent: state.components.find((c) => c.code === code),
        })),
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
    }),
    {
      name: "component-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
