export enum ConfigurationView {
  GUI_VIEW,
  TEXT_VIEW,
}

export type ComponentTree = {
  id: EntityId | "root";
  items?: ComponentTree[];
};
