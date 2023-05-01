import {
  CheckboxProperty,
  DatePickerProperty,
  DateProperty,
  FileProperty,
  NumberProperty,
  StringProperty,
  TextareaProperty,
} from 'entities/properties';

import { DATASOURCE_TYPE } from 'domain/parameter';

export enum ParameterType {
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  CHECKBOX = 'CHECKBOX',
  TEXT = 'TEXT',
  TEXTAREA = 'TEXTAREA',
  SWITCH = 'SWITCH',
  DATEPICKER = 'DATEPICKER',
  FILE = 'FILE',
  LINK = 'LINK',
  COMBOBOX = 'COMBOBOX',
  SELECT = 'SELECT',
  RADIOGROUP = 'RADIOGROUP',
}

type ParameterBase = {
  id: EntityId;
  name: string;
};

export type NumberParameter = ParameterBase & {
  properties?: NumberProperty;
  type: DATASOURCE_TYPE.NUMBER;
};

export type StringParameter = ParameterBase & {
  properties?: StringProperty;
  type: DATASOURCE_TYPE.TEXT;
};

export type DateParameter = ParameterBase & {
  properties?: DateProperty;
  type: DATASOURCE_TYPE.DATEPICKER;
};

export type CheckboxParameter = ParameterBase & {
  properties?: CheckboxProperty;
  type: DATASOURCE_TYPE.CHECKBOX;
};

export type TextareaParameter = ParameterBase & {
  properties?: TextareaProperty;
  type: DATASOURCE_TYPE.TEXTAREA;
};

export type DatePickerParameter = ParameterBase & {
  properties?: DatePickerProperty;
  type: DATASOURCE_TYPE.DATEPICKER;
};

export type FileParameter = ParameterBase & {
  properties?: FileProperty;
  type: DATASOURCE_TYPE.FILE;
};

export type Parameter =
  | DateParameter
  | StringParameter
  | NumberParameter
  | CheckboxParameter
  | TextareaParameter
  | DatePickerParameter
  | FileParameter;

export type InputParameter = Omit<Parameter, 'id'>;
