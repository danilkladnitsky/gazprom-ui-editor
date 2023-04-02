import React, { ReactNode } from "react";

import { SchemaTree } from "entities/app-configuration/domain";
import { useComponentModel } from "entities/component";
import { DatasourceComponent } from "features/render/component";

import { Form, Group, Page, Tabs } from "./components";

type Props = {
  item: SchemaTree;
  children: ReactNode;
};

function TreeItem({ item, children }: Props) {
  const { components } = useComponentModel();
  const component = components.find((c) => c.id === item.id);

  if (!component) {
    throw new Error(`Компонента с id ${item.id} не существует`);
  }

  const { code } = component;

  if (code !== "element") {
    const Wrapper = getComponentWrapper(code);
    return <Wrapper component={component}>{children}</Wrapper>;
  }

  return <DatasourceComponent {...component} />;
}

function getComponentWrapper(code: ComponentCode) {
  switch (code) {
    case "form":
      return Form;
    case "tabs":
      return Tabs;
    case "page":
      return Page;
    case "group":
    default:
      return Group;
  }
}

export default TreeItem;
