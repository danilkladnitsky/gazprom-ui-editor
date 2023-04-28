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

export enum DATASOURCE_TYPE {
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

interface IBaseParameter {
  code: string;
  name: string;
  type: DATASOURCE_TYPE;
  required?: boolean;
  validate?: boolean;
}

interface IFileParameter extends IBaseParameter {
  multiselect?: boolean;
}

export type IParameter = IBaseParameter | IFileParameter;
