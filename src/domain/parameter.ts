export type ParameterName = string;

export enum PARAMETER_TYPE {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  INTEGER = 'INTEGER',
  BOOLEAN = 'BOOLEAN',
  DATE = 'DATE',
  DATETIME = 'DATETIME',
  REF = 'REF',
  FILE = 'FILE',
}

export enum CONTROL_TYPE {
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

export interface IBaseParameter {
  code: EntityId;
  name: ParameterName;
  type: PARAMETER_TYPE;
  required?: boolean;
  validate?: boolean;
}

export interface IFileParameter extends IBaseParameter {
  multiselect?: boolean;
}

export type ICheckboxParameter = IBaseParameter

export type IParameter = IBaseParameter | IFileParameter;
