import { create } from 'zustand';

import { IComponent } from 'domain/component';

import { componentService } from 'application';

type State = {
  components: IComponent[];
  selectedComponentId: EntityId | null;
  selectedComponent: IComponent | null;
  activePageIndex: number;
};

type Actions = {
  setComponents: (components: IComponent[]) => void;
  selectComponent: (id: EntityId) => IComponent | undefined;
  updateSelectedComponent: (component: Partial<IComponent>) => void;
  setActivePageIndex: (page: number) => void;
};

const initialState: State = {
  components: [],
  selectedComponentId: null,
  selectedComponent: null,
  activePageIndex: 0,
};

export const useComponentsStore = create<State & Actions>()((set, state) => ({
  ...initialState,
  setComponents: (components) => {
    set({ components });
  },
  selectComponent: (id) => {
    set({ selectedComponentId: id });

    const selected = state().components.find(c => c.code === id);

    set({ selectedComponent: selected });
    return selected;
  },
  updateSelectedComponent: (payload) => {
    const { selectedComponentId } = state();

    if (!selectedComponentId) {
      return;
    }

    const [updatedComponent, allComponents] = componentService
      .updateComponent(selectedComponentId, payload);

    set({ components: allComponents, selectedComponent: updatedComponent });

  },
  setActivePageIndex: (index) => {
    set({ activePageIndex: index });
  },
}
));
