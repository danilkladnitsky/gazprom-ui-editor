export enum PARAMETER_TYPE {
  STRING = 'string',
  NUMBER = 'number',
  INTEGER = 'integer',
  BOOLEAN = 'boolean',
  DATE = 'date',
  DATETIME = 'dateTime',
  REF = 'ref',
  FILE = 'file',
}

interface IBaseParameter {
  code: string;
  name: string;
  type: PARAMETER_TYPE;
  required?: boolean;
  validate?: boolean;
}

interface IFileParameter extends IBaseParameter {
  multiselect?: boolean;
}

export type IParameter = IBaseParameter | IFileParameter;
