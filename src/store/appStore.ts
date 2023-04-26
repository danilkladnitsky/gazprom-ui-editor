import { create } from 'zustand';

type State = {
    form: any | null;
};

type Actions = {
  setForm: (form) => void
};

const initialState: State = {
  form: null,
};

export const useAppStore = create<State & Actions>()((set) => ({
  ...initialState,
  setForm: (form) => {
    set({ form });
  },
}));
