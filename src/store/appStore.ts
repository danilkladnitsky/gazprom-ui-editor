import { create } from 'zustand';

import { IComponent, IForm } from 'domain/component';

import { appService } from 'application';

type State = {
    form: IForm | null;
};

type Actions = {
  setForm: (form: IForm) => void
  replaceComponent: (component: IComponent, target: EntityId) => void;
};

const initialState: State = {
  form: null,
};

export const useAppStore = create<State & Actions>()((set) => ({
  ...initialState,
  setForm: (form) => {
    set({ form });
  },
  replaceComponent: (component: IComponent, target: EntityId) => {
    appService.insertComponent(component, target);
  },

}));
