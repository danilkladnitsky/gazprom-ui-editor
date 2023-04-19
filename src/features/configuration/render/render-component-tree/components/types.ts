import { SchemaTree } from "entities/app-configuration/domain";
import { Component, ComponentGroup } from "entities/component/domain";
import { ReactNode } from "react";

export type ComponentProps = {
  children: ReactNode[];
  component: Component;
  subTree: SchemaTree;
};

export type GroupProps = ComponentProps & {
  component: ComponentGroup;
};
