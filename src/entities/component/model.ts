import { create } from "zustand";

import { Parameter, ParameterType } from "entities/parameter";
import { Property } from "entities/properties";

const DEFAULT_COMPONENT: Component = {
    code: "code",
    name: "ФИО",
    parameter: {
        id: "id",
        name: "My label",
        property: {
          lineCount: 3,
          multiline: true
        },
        type: ParameterType.STRING
      }
};

type ComponentBase = {
    code: ComponentCode;   
    name: ComponentName;
    description?: ComponentDescription;
}

export type ComponentForm = ComponentBase & {
    code: "form";
}

export type ComponentTabs = ComponentBase & {
    code: "tabs";
}

export type ComponentPage = ComponentBase & {
    code: "page";
}

export type ComponentGroup = ComponentBase & {
    code: "group";
}

export type ComponentElement = ComponentBase & {
    code: "element";
} & Parameter;

export type Component = ComponentForm
    | ComponentTabs
    | ComponentPage
    | ComponentGroup
    | ComponentElement;

export type ComponentTree = ComponentBase & {
    items?: Component[];
};

interface ComponentState {
    selectedComponent: Component | null;
    components: Component[];
    updateSelectedComponent: (component: Component) => void;
 }

export const useComponentModel = create<ComponentState>((set) => ({
    selectedComponent: DEFAULT_COMPONENT,
    components: [],
    selectComponent: (code: EntityId) => (set(state => (
        { selectedComponent: state.components.find(c => c.code === code) }
    ))),
    updateSelectedComponent: (updatedComponent: Component) => {
        set((state) => {
            const component = state.selectedComponent;
            if (!component) return state;

            return { ...state, selectedComponent: { ...component, ...updatedComponent } };
            
        })
    }
}))