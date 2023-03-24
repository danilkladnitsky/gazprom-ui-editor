import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import {
  CheckboxProperty,
  DateProperty,
  NumberProperty,
  StringProperty,
} from "entities/properties";

export enum ParameterType {
  STRING = "TEXT",
  NUMBER = "NUMBER",
  DATE = "DATE",
  CHECKBOX = "CHECKBOX",
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

export type CheckboxParameter = ParameterBase & {
  properties: CheckboxProperty;
  type: ParameterType.CHECKBOX;
};

export type Parameter =
  | DateParameter
  | StringParameter
  | NumberParameter
  | CheckboxParameter;

interface ParameterState {
  parameters: Parameter[];
  selectedParameter: Parameter | null;
  loadParameters: (parameters: Parameter[]) => void;
}

export const useParameterModel = create(
  persist<ParameterState>(
    (set) => ({
      parameters: [],
      selectedParameter: null,
      loadParameters: (parameters: Parameter[]) => {
        set({ parameters });
      },
    }),
    {
      name: "parameter-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
