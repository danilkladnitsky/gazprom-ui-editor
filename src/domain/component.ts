import { IParameter } from "./parameter";

export enum ELEMENT_TYPE {
  ELEMENT = "ELEMENT",
  FORM = "FORM",
  PAGE = "PAGE",
  GROUP = "GROUP",
  TAB = "TAB",
  CONTROL = "CONTROL",
}

export interface IBaseComponent {
  code: EntityId;
  name: string;
}

export type ITab = IBaseComponent & {
  type: ELEMENT_TYPE.TAB;
  items: IPage[];
};

export type IPage = IBaseComponent & {
  type: ELEMENT_TYPE.PAGE;
  items: IElement[];
};

export type IGroup = IBaseComponent & {
  type: ELEMENT_TYPE.GROUP;
  items: IElement[];
};

export type IElement = IBaseComponent & {
  type: ELEMENT_TYPE.ELEMENT;
  dataSource: IParameter;
};

export type IComponent = IElement | IGroup | IPage | ITab;
