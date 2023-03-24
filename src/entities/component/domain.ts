import { Parameter } from "entities/parameter";

type ComponentBase = {
  id: EntityId;
  code: ComponentCode;
  name: ComponentName;
  description?: ComponentDescription;
};

export type ComponentForm = ComponentBase & {
  code: "form";
};

export type ComponentTabs = ComponentBase & {
  code: "tabs";
};

export type ComponentPage = ComponentBase & {
  code: "page";
};

export type ComponentGroup = ComponentBase & {
  code: "group";
  direction: "row" | "column";
};

export type ComponentElement = ComponentBase & {
  code: "element";
} & Parameter;

export type Component =
  | ComponentForm
  | ComponentTabs
  | ComponentPage
  | ComponentGroup
  | ComponentElement;

export type ComponentTree = ComponentBase & {
  items?: Component[];
};
