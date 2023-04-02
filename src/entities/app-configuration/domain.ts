export enum ConfigurationView {
  GUI_VIEW,
  TEXT_VIEW,
  GUI_DRAG_AND_DROP,
  TEXT_DRAG_AND_DROP,
}

export type SchemaTree = {
  id: EntityId;
  items?: SchemaTree[];
};

export type ComponentTree = {
  items?: ComponentTree[];
};

export type GuiMode = "edit" | "drag-and-drop";
