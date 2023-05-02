export type ViewPropertyOptions = 'CHECKBOX' | 'SWITCH';

type Properties = {
  minValue: number;
  maxValue: number;
  multiline: boolean;
  lineCount: number;
  dateFormat: string;
  isChecked: boolean;
  multiple: boolean;
  minDateValue: Date;
  maxDateValue: Date;
  mask: string;
  view: ViewPropertyOptions;
};

export type NumberProperty = Pick<Properties, 'minValue' | 'maxValue'>;
export type StringProperty = Pick<Properties, 'mask'>;
export type DateProperty = Pick<Properties, 'dateFormat'>;
export type CheckboxProperty = Pick<Properties, 'isChecked'>;
export type TextareaProperty = Pick<Properties, 'lineCount'>;
export type DatePickerProperty = Pick<
  Properties,
  'minDateValue' | 'maxDateValue'
>;
export type FileProperty = Pick<Properties, 'multiple'>;
export type BooleanProperty = Pick<Properties, 'view'>;

export type Property =
  | NumberProperty
  | StringProperty
  | DateProperty
  | CheckboxProperty
  | TextareaProperty
  | FileProperty
  | BooleanProperty
  | DatePickerProperty;
