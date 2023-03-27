import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { generateIds } from "shared/utils/generateIds";
import { InputParameter, Parameter } from "./domain";

interface ParameterState {
  parameters: Parameter[];
  selectedParameter: Parameter | null;
  loadParameters: (parameters: InputParameter[]) => Parameter[];
}

export const useParameterModel = create(
  persist<ParameterState>(
    (set) => ({
      parameters: [],
      selectedParameter: null,
      loadParameters: (parameters: InputParameter[]) => {
        const parametersWithId = generateIds<InputParameter>(
          parameters
        ) as Parameter[];
        set({ parameters: parametersWithId });
        return parametersWithId;
      },
    }),
    {
      name: "parameter-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
