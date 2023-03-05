import { create } from "zustand";

export type ParameterType = string;

export type Parameter = {
  label: string;
  type: ParameterType;
};

const DEFAULT_PARAMETERS: Parameter[] = [
  {
    label: "Строка",
    type: "string",
  },
  {
    label: "Число",
    type: "number",
  },
];

interface ParameterState {
  parameters: Parameter[];
  selectedParameter: Parameter | null;
  selectParameter: (parameter: Parameter) => void;
}

export const useParameterModel = create<ParameterState>((set) => ({
  parameters: DEFAULT_PARAMETERS,
  selectedParameter: null,
  selectParameter: (parameter) => set({ selectedParameter: parameter }),
}));
