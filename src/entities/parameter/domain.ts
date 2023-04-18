import {
  CheckboxProperty,
  DateProperty,
  NumberProperty,
  StringProperty,
} from "entities/properties";

export enum ParameterType {
  NUMBER = "NUMBER",
  DATE = "DATE",
  CHECKBOX = "CHECKBOX",
  TEXT = "TEXT",
  TEXTAREA = "TEXTAREA",
  SWITCH = "SWITCH",
  DATEPICKER = "DATEPICKER",
  FILE = "FILE",
  LINK = "LINK",
  COMBOBOX = "COMBOBOX",
  SELECT = "SELECT",
  RADIOGROUP = "RADIOGROUP",
}

type ParameterBase = {
  id: EntityId;
  name: string;
};

export type NumberParameter = ParameterBase & {
  properties?: NumberProperty;
  type: ParameterType.NUMBER;
};

export type StringParameter = ParameterBase & {
  properties?: StringProperty;
  type: ParameterType.TEXT;
};

export type DateParameter = ParameterBase & {
  properties?: DateProperty;
  type: ParameterType.DATE;
};

export type CheckboxParameter = ParameterBase & {
  properties?: CheckboxProperty;
  type: ParameterType.CHECKBOX;
};

export type TextareaParameter = ParameterBase & {
  properties?: TextareaProperty;
  type: ParameterType.TEXTAREA;
};

export type Parameter =
  | DateParameter
  | StringParameter
  | NumberParameter
  | CheckboxParameter;

export type InputParameter = Omit<Parameter, "id">;
