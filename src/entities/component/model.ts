import { create } from "zustand";

import { Parameter } from "entities/parameter";

export type Component = {
    code: EntityId;
    parameter: Parameter;
    name?: string;
};

interface ComponentState {
    selectedComponent: Component | null;
    components: Component[];
 }

export const useComponentModel = create<ComponentState>((set) => ({
    selectedComponent: null,
    components: [],
    selectComponent: (code: EntityId) => (set(state => (
        { selectedComponent: state.components.find(c => c.code === code) }
    )))
}))