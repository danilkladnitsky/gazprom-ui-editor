import { ELEMENT_TYPE } from './component';
import { CONTROL_TYPE, PARAMETER_TYPE } from './parameter';

/** Тип значения свойства. */
export enum PROPERTY_VALUE_TYPE {
  STRING = 'string',
  INTEGER = 'integer',
  BOOLEAN = 'boolean',
  DATE = 'date',
  LIST = 'list',
}

/** Конфигурация свойства. */
export interface IPropertyConfig {
  code: string;
  name: string;
  type: PROPERTY_VALUE_TYPE;
  options?: string[];
}

export interface IEditConfig {
  title: string;
  fields: IPropertyConfig[];
}

type ParameterTypes = keyof typeof PARAMETER_TYPE;
type ElementTypes = keyof typeof ELEMENT_TYPE;
type ControlTypes = keyof typeof CONTROL_TYPE;

type KeyType = number | string | symbol;

type ParameterConfigMap<T extends KeyType> =
  { [key in T]?: IPropertyConfig[] };

export enum METADATA_SECTION {
  ELEMENT_TYPE = 'byElementType',
  PARAMETER_TYPE = 'byParameterType',
  CONTROL_TYPE = 'byControlType',
}

/** Метаданные свойств. */
export interface IPropertyMetadata {
  /** Свойства по типу элемента формы. */
  [METADATA_SECTION.ELEMENT_TYPE]: ParameterConfigMap<ElementTypes>;
  /** Свойства по типу параметра операции. */
  [METADATA_SECTION.PARAMETER_TYPE]: ParameterConfigMap<ParameterTypes>;
  /** Свойства по типу поля ввода. */
  [METADATA_SECTION.CONTROL_TYPE]: ParameterConfigMap<ControlTypes>;
}

export type MetadataSectionKey<T extends METADATA_SECTION> = T extends
  METADATA_SECTION.ELEMENT_TYPE
  ? ElementTypes
  : T extends METADATA_SECTION.CONTROL_TYPE
  ? ControlTypes
  : T extends METADATA_SECTION.PARAMETER_TYPE
  ? ParameterTypes
  : never;

/** Пример объекта. */
export const EDIT_CONFIG_METADATA: IPropertyMetadata = {
  [METADATA_SECTION.ELEMENT_TYPE]: {
    // Общие свойства для всех элементов.
    ELEMENT: [
      { code: 'title', name: 'Наименование', type: PROPERTY_VALUE_TYPE.STRING },
    ],
    GROUP: [
      {
        code: 'direction',
        name: 'Ориентация',
        type: PROPERTY_VALUE_TYPE.LIST,
        options: ['FORCE_HORIZONTAL', 'HORIZONTAL', 'VERTICAL'],
      },
      {
        code: 'showTitle',
        name: 'Отображать заголовок',
        type: PROPERTY_VALUE_TYPE.BOOLEAN,
      },
    ],
    // Общие свойства для всех полей ввода
    CONTROL: [
      {
        code: 'readonly',
        name: 'Только чтение',
        type: PROPERTY_VALUE_TYPE.BOOLEAN,
      },
      { code: 'hidden', name: 'Скрытый', type: PROPERTY_VALUE_TYPE.BOOLEAN },
      {
        code: 'info',
        name: 'Информационное поле',
        type: PROPERTY_VALUE_TYPE.BOOLEAN,
      },
      { code: 'hint', name: 'Подсказка', type: PROPERTY_VALUE_TYPE.STRING },
    ],
  },
  [METADATA_SECTION.PARAMETER_TYPE]: {
    STRING: [
      {
        code: 'multiline',
        name: 'Многострочный',
        type: PROPERTY_VALUE_TYPE.BOOLEAN,
      },
      { code: 'length', name: 'Длина', type: PROPERTY_VALUE_TYPE.INTEGER },
      {
        code: 'counter',
        name: 'Счетчик символов',
        type: PROPERTY_VALUE_TYPE.BOOLEAN,
      },
    ],
    INTEGER: [
      {
        code: 'minValue',
        name: 'Минимальное значение',
        type: PROPERTY_VALUE_TYPE.INTEGER,
      },
      {
        code: 'maxValue',
        name: 'Максимальное значение',
        type: PROPERTY_VALUE_TYPE.INTEGER,
      },
    ],
    NUMBER: [
      {
        code: 'minValue',
        name: 'Минимальное значение',
        type: PROPERTY_VALUE_TYPE.INTEGER,
      },
      {
        code: 'maxValue',
        name: 'Максимальное значение',
        type: PROPERTY_VALUE_TYPE.INTEGER,
      },
      { code: 'scale', name: 'Точность', type: PROPERTY_VALUE_TYPE.INTEGER },
    ],
    BOOLEAN: [
      {
        code: 'view',
        name: 'Вариант отображения',
        type: PROPERTY_VALUE_TYPE.LIST,
        options: ['CHECKBOX', 'SWITCH'],
      },
    ],
    DATE: [
      {
        code: 'minValue',
        name: 'Минимальное значение',
        type: PROPERTY_VALUE_TYPE.DATE,
      },
      {
        code: 'maxValue',
        name: 'Максимальное значение',
        type: PROPERTY_VALUE_TYPE.DATE,
      },
    ],
    DATETIME: [
      {
        code: 'minValue',
        name: 'Минимальное значение',
        type: PROPERTY_VALUE_TYPE.DATE,
      },
      {
        code: 'maxValue',
        name: 'Максимальное значение',
        type: PROPERTY_VALUE_TYPE.DATE,
      },
    ],
    FILE: [
      {
        code: 'multiple',
        name: 'Выбирать несколько',
        type: PROPERTY_VALUE_TYPE.BOOLEAN,
      },
    ],
    REF: [
      {
        code: 'view',
        name: 'Вариант отображения',
        type: PROPERTY_VALUE_TYPE.LIST,
        options: ['COMBOBOX', 'RADIOGROUP'],
      },
    ],
  },
  [METADATA_SECTION.CONTROL_TYPE]: {
    TEXT: [
      { code: 'mask', name: 'Маска ввода', type: PROPERTY_VALUE_TYPE.STRING },
    ],
    TEXTAREA: [
      {
        code: 'lineCount',
        name: 'Количество строк',
        type: PROPERTY_VALUE_TYPE.INTEGER,
      },
    ],
    CHECKBOX: [],
    COMBOBOX: [],
    DATE: [],
    DATEPICKER: [],
    FILE: [],
    LINK: [],
    NUMBER: [],
    RADIOGROUP: [],
    SELECT: [],
    SWITCH: [],
  },
};
