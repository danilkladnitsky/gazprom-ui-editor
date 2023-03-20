import { create } from "zustand";
import { enqueueSnackbar } from 'notistack'

import {
  DateProperty,
  NumberProperty,
  StringProperty,
} from "entities/properties";

export enum ParameterType {
  STRING = "TEXT",
  NUMBER = "NUMBER",
  DATE = "DATE",
}

export type FieldId = string;

type ParameterBase = {
  code: FieldId;
  name: string;
};

export type NumberParameter = ParameterBase & {
  properties: NumberProperty;
  type: ParameterType.NUMBER;
};

export type StringParameter = ParameterBase & {
  properties?: StringProperty;
  type: ParameterType.STRING;
};

export type DateParameter = ParameterBase & {
  properties: DateProperty;
  type: ParameterType.DATE;
};

export type Parameter = DateParameter | StringParameter | NumberParameter;

interface ParameterState {
  parameters: Parameter[];
  selectedParameter: Parameter | null;
  loadParameters: (parameters: Parameter[]) => void;
}

export const useParameterModel = create<ParameterState>((set) => ({
  parameters: [],
  selectedParameter: null,
  loadParameters: (parameters: Parameter[]) => {
    set({ parameters });
  },
}));
