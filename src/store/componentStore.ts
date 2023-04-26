import { create } from "zustand";

import { IComponent } from "domain/component";

type State = {
  components: IComponent[];
};

type Actions = {};

const initialState: State = {
  components: [],
};

const service = new ParameterService();

const useComponents = create<State & Actions>()((set) => ({
  ...initialState,
}));
