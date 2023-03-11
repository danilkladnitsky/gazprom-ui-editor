import { DateProperty, NumberProperty, StringProperty } from "entities/properties";
import { create } from "zustand";

export enum ParameterType {
  STRING = "string",
  NUMBER = "number",
  DATE = "date"
}

export type FieldId = string;

type ParameterBase = {
  id: FieldId;
  label: string;
};

export type NumberParameter = ParameterBase & {
  property: NumberProperty,
  type: ParameterType.NUMBER,
}

export type StringParameter = ParameterBase & {
  property: StringProperty,
  type: ParameterType.STRING,
}

export type DateParameter = ParameterBase & {
  property: DateProperty,
  type: ParameterType.DATE,
}

export type FieldParameter = DateParameter | StringParameter | NumberParameter;

const DEFAULT_PARAMETERS: FieldParameter[] = [
  {
    label: "Параметр: строка",
    type: ParameterType.STRING,
    property: { lineCount: 2, multiine: false },
    id: "string"
  },
  {
    label: "Параметр: число",
    type: ParameterType.NUMBER,
    property: {
      maxValue: 100,
      minValue: 0
    },
    id: "number"

  },
  {
    label: "Параметр: дата",
    type: ParameterType.DATE,
    property: {
      dateFormat: "LLLL"
    },
    id: "date"
  },
];

interface ParameterState {
  parameters: FieldParameter[];
  selectedParameter: FieldParameter | null;
  selectParameter: (id: FieldId) => void;
}

export const useParameterModel = create<ParameterState>((set) => ({
  parameters: DEFAULT_PARAMETERS,
  selectedParameter: null,
  selectParameter: (id: FieldId) => set((state) => (
    { selectedParameter: state.parameters.find(p => p.id === id) }
  )),
}));
