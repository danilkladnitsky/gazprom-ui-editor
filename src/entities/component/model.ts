import { create } from "zustand";

import { Parameter, ParameterType } from "entities/parameter";

const DEFAULT_COMPONENT: Component = {
      code: "code",
      parameter: {
        id: "id",
        label: "My label",
        property: {
          lineCount: 3,
          multiline: true
        },
        type: ParameterType.STRING
      }
};

export type Component = {
    code: EntityId;
    parameter: Parameter;
    name?: string;
};

interface ComponentState {
    selectedComponent: Component | null;
    components: Component[];
    updateSelectedComponent: (parameter: Parameter) => void;
 }

export const useComponentModel = create<ComponentState>((set) => ({
    selectedComponent: DEFAULT_COMPONENT,
    components: [],
    selectComponent: (code: EntityId) => (set(state => (
        { selectedComponent: state.components.find(c => c.code === code) }
    ))),
    updateSelectedComponent: (parameter: Parameter) => {
        set((state) => {
            const component = state.selectedComponent;
            if (!component) return state;

            const updatedComponent: Component = { ...component, parameter };

            return { ...state, selectedComponent: updatedComponent };
            
        })
    }
}))