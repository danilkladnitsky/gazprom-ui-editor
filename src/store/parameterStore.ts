import { create } from "zustand";

import { IParameter } from "domain/parameter";

import { ParameterService } from "application/parameter";

type State = {
  parameters: IParameter[];
};

type Actions = {
  parseFromFile: (file: File) => Promise<IParameter[]>;
};
const initialState: State = {
  parameters: [],
};

const service = new ParameterService();

export const useParametersStore = create<State & Actions>()((set) => ({
  ...initialState,
  parseFromFile: async (file: File) => {
    const parsedParameters = await service.readParametersFile(file);
    set({ parameters: parsedParameters });

    return parsedParameters;
  },
  reset: () => {
    set(initialState);
  },
}));
