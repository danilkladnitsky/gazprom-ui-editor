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

type ParameterBase = {
  id: EntityId;
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

export type InputParameter = Omit<Parameter, "id">;
