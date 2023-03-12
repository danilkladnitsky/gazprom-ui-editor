import { create } from "zustand";

import { Parameter } from "entities/parameter";

type Component = {
    id: EntityId;
    parameter: Parameter;
};

interface ComponentState {
    selectedComponent: Component | null;
    components: Component[];
 }

export const useComponentModel = create<ComponentState>((set) => ({
    selectedComponent: null,
    components: [],
    selectComponent: (id: EntityId) => (set(state => (
        { selectedComponent: state.components.find(c => c.id === id) }
    )))
}))