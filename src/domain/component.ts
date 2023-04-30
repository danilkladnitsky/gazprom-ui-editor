import { CONTROL_TYPE, PARAMETER_TYPE,ParameterName } from './parameter';
import { Properties } from './property';

export enum ELEMENT_TYPE {
  ELEMENT = 'ELEMENT',
  FORM = 'FORM',
  PAGE = 'PAGE',
  GROUP = 'GROUP',
  TAB = 'TAB',
  CONTROL = 'CONTROL',
}

export interface IBaseComponent {
  code: EntityId;
  name: string;
  items?: IBaseComponent[];
}

export type IForm = IBaseComponent & {
  type: ELEMENT_TYPE.FORM;
  items: IPage[] | ITab[];
};

export type ITab = IBaseComponent & {
  type: ELEMENT_TYPE.TAB;
  items: IPage[];
};

export type IPage = IBaseComponent & {
  type: ELEMENT_TYPE.PAGE;
  items: IElement[] | IGroup[];
};

export type IGroup = IBaseComponent & {
  type: ELEMENT_TYPE.GROUP;
  items: IElement[];
};

export type IElement = IBaseComponent & {
  type: ELEMENT_TYPE.ELEMENT;
  as: CONTROL_TYPE;
  dataSource: ParameterName;
  properties?: Properties;
  items?: never;
};

export const ELEMENT_PARAMETER_MAP = {
  [PARAMETER_TYPE.STRING]: [CONTROL_TYPE.TEXT, CONTROL_TYPE.TEXTAREA],
  [PARAMETER_TYPE.INTEGER]: [CONTROL_TYPE.NUMBER],
  [PARAMETER_TYPE.NUMBER]: [CONTROL_TYPE.NUMBER],
  [PARAMETER_TYPE.BOOLEAN]: [CONTROL_TYPE.CHECKBOX, CONTROL_TYPE.SWITCH],
  [PARAMETER_TYPE.DATE]: [CONTROL_TYPE.DATE],
  [PARAMETER_TYPE.DATETIME]: [CONTROL_TYPE.DATEPICKER],
  [PARAMETER_TYPE.REF]: [
    CONTROL_TYPE.LINK,
    CONTROL_TYPE.SELECT,
    CONTROL_TYPE.RADIOGROUP,
    CONTROL_TYPE.COMBOBOX,
  ],
  [PARAMETER_TYPE.FILE]: [CONTROL_TYPE.FILE],
};

export type IExtendableComponent = IGroup | IPage | ITab | IForm;

export type IComponent = IElement | IExtendableComponent;
