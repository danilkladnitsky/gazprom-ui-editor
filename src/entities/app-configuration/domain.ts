import { Component } from "entities/component/domain";

export enum ConfigurationView {
  GUI_VIEW,
  TEXT_VIEW,
}

export type SchemaTree = {
  id: EntityId;
  items?: SchemaTree[];
};

export type ComponentTree = {
  items?: ComponentTree[];
};
