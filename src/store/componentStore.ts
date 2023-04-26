import { create } from 'zustand';

import { IComponent } from 'domain/component';

import { ComponentService } from 'application/component';

type State = {
  components: IComponent[];
};

type Actions = {
  setComponents: (components: IComponent[]) => void
};

const initialState: State = {
  components: [],
};

const service = new ComponentService();

export const useComponentsStore = create<State & Actions>()((set) => ({
  ...initialState,
  setComponents: (components) => {
    set({ components });
  },
}));
