import { IParameter } from './parameter';

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
  dataSource: IParameter;
  items?: never;
};

export type IExtendableComponent = IGroup | IPage | ITab | IForm;

export type IComponent = IElement | IExtendableComponent;
