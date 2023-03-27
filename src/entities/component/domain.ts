import { Parameter } from "entities/parameter/domain";

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
  dataSource: Parameter;
};

export type DatasourceComponent = ComponentElement;

export type Component =
  | ComponentForm
  | ComponentTabs
  | ComponentPage
  | ComponentGroup
  | DatasourceComponent;

export type ComponentTree = ComponentBase & {
  items?: Component[];
};
