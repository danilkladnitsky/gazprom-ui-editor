import { PARAMETER_TYPE } from './parameter';

/** Тип значения свойства. */
export type PropertyValue = string | number | boolean | null;

/** Свойства элемента формы. */
export type Properties = Record<string, PropertyValue>;

export enum PROPERTY_VALUE_TYPE {
  STRING = 'string',
  INTEGER = 'integer',
  BOOLEAN = 'boolean',
  DATE = 'date',
  LIST = 'list',
}

export enum PROPERTY_CODE {
  TITLE = 'title',
  DIRECTION = 'direction',
  SHOW_TITLE = 'showTitle',
  DATASOURCE = 'dataSource',
  READONLY = 'readonly',
  HIDDEN = 'hidden',
  INFO = 'info',
  HINT = 'hint',
  MULTILINE = 'multiLine',
  LENGTH = 'length',
  COUNTER = 'counter',
  MIN_VALUE = 'minValue',
  MAX_VALUE = 'maxValue',
  SCALE = 'scale',
  VIEW = 'view',
  MULTIPLE = 'multiple',
  MASK = 'mask',
  LINE_COUNT = 'lineCount',
}

export type Property = {
  code: string;
  name: string;
  type: PROPERTY_VALUE_TYPE;
  options: [PARAMETER_TYPE];
  isOwnProperty?: boolean;
};
