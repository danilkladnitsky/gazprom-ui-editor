import { Component, ComponentGroup } from "entities/component";
import { ReactNode } from "react";

export type ComponentProps = {
  children: ReactNode;
  component: Component;
};

export type GroupProps = ComponentProps & {
  component: ComponentGroup;
};
