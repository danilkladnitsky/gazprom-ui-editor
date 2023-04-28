import { create } from 'zustand';

import { IComponent } from 'domain/component';

import { ComponentService } from 'application/component';

type State = {
  components: IComponent[];
  selectedComponentId: EntityId | null;
};

type Actions = {
  setComponents: (components: IComponent[]) => void;
  selectComponent: (id: EntityId) => IComponent | undefined;
  updateSelectedComponent: (component: Partial<IComponent>) => void;
};

const initialState: State = {
  components: [],
  selectedComponentId: null,
};

const service = new ComponentService();

export const useComponentsStore = create<State & Actions>()((set, state) => ({
  ...initialState,
  setComponents: (components) => {
    set({ components });
  },
  selectComponent: (id) => {
    set({ selectedComponentId: id });

    const selected = state().components.find(c => c.code === id);
    return selected;
  },
  updateSelectedComponent: (payload) => {
    const { selectedComponentId } = state();

    if (!selectedComponentId) {
      return;
    }

    const [, allComponents] = service
      .updateComponent(selectedComponentId, payload);

    set({ components: allComponents });

  },
}
));
