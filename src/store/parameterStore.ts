import { create } from 'zustand';

import { IParameter } from 'domain/parameter';

import { parameterService, propertiesService } from 'application';
type State = {
  parameters: IParameter[];
};

type Actions = {
  parseFromFile: (file: File) => Promise<IParameter[]>;
};
const initialState: State = {
  parameters: [],
};

export const useParametersStore = create<State & Actions>()((set) => ({
  ...initialState,
  parseFromFile: async (file: File) => {
    const parsedParameters = await parameterService.
      readParametersFile(file);

    propertiesService.setParameters(parsedParameters);

    set({ parameters: parsedParameters });

    return parsedParameters;
  },
  reset: () => {
    set(initialState);
  },
}));
