import { create } from "zustand";

import { DateProperty, NumberProperty, StringProperty } from "entities/properties";

export enum ParameterType {
  STRING = "TEXT",
  NUMBER = "NUMBER",
  DATE = "DATE"
}

export type FieldId = string;

type ParameterBase = {
  id: FieldId;
  name: string;
  label?: string;
};

export type NumberParameter = ParameterBase & {
  properties: NumberProperty,
  type: ParameterType.NUMBER,
}

export type StringParameter = ParameterBase & {
  properties?: StringProperty,
  type: ParameterType.STRING,
}

export type DateParameter = ParameterBase & {
  properties: DateProperty,
  type: ParameterType.DATE,
}

export type Parameter = DateParameter | StringParameter | NumberParameter;

const DEFAULT_PARAMETERS: Parameter[] = [
  {
    name: "Параметр: строка",
    type: ParameterType.STRING,
    property: { lineCount: 2, multiline: false },
    id: "string"
  },
  {
    name: "Параметр: число",
    type: ParameterType.NUMBER,
    property: {
      maxValue: 100,
      minValue: 0
    },
    id: "number"

  },
  {
    name: "Параметр: дата",
    type: ParameterType.DATE,
    property: {
      dateFormat: "LLLL"
    },
    id: "date"
  },
];

interface ParameterState {
  parameters: Parameter[];
  selectedParameter: Parameter | null;
  selectParameter: (id: FieldId) => void;
  updateParameter: (parameter: Parameter) => void;
}

export const useParameterModel = create<ParameterState>((set) => ({
  parameters: DEFAULT_PARAMETERS,
  selectedParameter: null,
  selectParameter: (id: FieldId) => set((state) => (
    { selectedParameter: state.parameters.find(p => p.id === id) }
  )),
  updateParameter: ({ id, ...rest }: Parameter) => set((state) => (
    { parameters: state.parameters.map((p) => p.id === id ? ({ ...p, ...rest }) : p) }
  ))
}));
