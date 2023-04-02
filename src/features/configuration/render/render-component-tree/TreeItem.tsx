import React, { ReactNode } from "react";

import { SchemaTree } from "entities/app-configuration/domain";
import { DatasourceComponent } from "features/render/component";

import { Form, Group, Page, Tabs } from "./components";
import { useComponent } from "shared/hooks/useComponent";
import { withWatching } from "shared/hocs";
import { withDragging, withDraggingProps } from "shared/hocs/withDragging";
import DropTreeItemArea from "./DropTreeItemArea";
import { useComponentModel } from "entities/component";

type Props = {
  item: SchemaTree;
  children: ReactNode;
} & withDraggingProps;

function TreeItem({ item, children }: Props) {
  const { swapComponents } = useComponentModel();
  const component = useComponent(item.id);

  if (!component) {
    throw new Error(`Компонента с id ${item.id} не существует`);
  }

  const { code } = component;

  if (code !== "element") {
    const Wrapper = getComponentWrapper(code);
    return <Wrapper component={component}>{children}</Wrapper>;
  }

  const handleDrop = ({ id }: SchemaTree) => {
    swapComponents(item.id, id);
  };

  return (
    <>
      <DropTreeItemArea item={item} onDrop={handleDrop} />
      <DatasourceComponent {...component} />
    </>
  );
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

export default withWatching(withDragging(TreeItem, "app-form"));
