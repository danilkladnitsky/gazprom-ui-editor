import { DateProperty, NumberProperty, StringProperty } from "entities/properties";
import { create } from "zustand";

export enum ParameterType {
  STRING,
  NUMBER,
  DATE
}

type ParameterBase = {
  id?: string;
};

export type NumberParameter = ParameterBase & {
  label: "Число",
  property: NumberProperty,
  type: ParameterType.NUMBER
}

export type StringParameter = ParameterBase & {
  label: "Строка",
  property: StringProperty,
  type: ParameterType.STRING
}

export type DateParameter = ParameterBase & {
  label: "Дата",
  property: DateProperty,
  type: ParameterType.DATE
}

export type FieldParameter = DateParameter | StringParameter | NumberParameter;

const DEFAULT_PARAMETERS: FieldParameter[] = [
  {
    label: "Строка",
    type: ParameterType.STRING,
    property: {lineCount: 2, multiine: false}
  },
  {
    label: "Число",
    type: ParameterType.NUMBER,
    property: {
      maxValue: 100,
      minValue: 0
    }

  },
  {
    label: "Дата",
    type: ParameterType.DATE,
    property: {
      dateFormat: "LLLL"
    }
  },
];

interface ParameterState {
  parameters: FieldParameter[];
  selectedParameter: FieldParameter | null;
  selectParameter: (parameter: FieldParameter) => void;
}

export const useParameterModel = create<ParameterState>((set) => ({
  parameters: DEFAULT_PARAMETERS,
  selectedParameter: null,
  selectParameter: (parameter) => set({ selectedParameter: parameter }),
}));
