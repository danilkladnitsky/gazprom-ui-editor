import React, { ReactNode } from "react";

import { SchemaTree } from "entities/app-configuration/domain";
import { DatasourceComponent } from "features/render/component";

import { Form, Group, Page, Tabs } from "./components";
import { useComponent } from "shared/hooks/useComponent";
import { withWatching } from "shared/hocs";
import { withDragging, withDraggingProps } from "shared/hocs/withDragging";
import DropTreeItemArea from "./DropTreeItemArea";
import { useComponentModel } from "entities/component";
import { OnDropFn } from "entities/drag-and-drop/domain";
import { useAppConfigurationModel } from "entities/app-configuration";
import { DatasourceComponent as DatasourceComponentType } from "entities/component/domain";

type Props = {
  item: SchemaTree;
  children: ReactNode;
} & withDraggingProps;

function TreeItem({ item, children }: Props) {
  const { swapComponents, insertComponent } = useAppConfigurationModel();
  const { duplicateComponent } = useComponentModel();
  const component = useComponent(item.id);

  if (!component) {
    throw new Error(`Компонента с id ${item.id} не существует`);
  }

  if (component.code !== "element") {
    const Wrapper = getComponentWrapper(component.code);
    return <Wrapper component={component}>{children}</Wrapper>;
  }

  const handleDrop: OnDropFn<SchemaTree> = (droppedItem) => {
    if (droppedItem.alias === "app-form") {
      swapComponents(droppedItem.item.id, item.id);
      return;
    }

    const neighborId = droppedItem.item.id;
    const createdComponent = duplicateComponent(neighborId);

    if (!createdComponent) {
      return;
    }

    insertComponent(createdComponent?.id, item.id);
  };

  return (
    <>
      <DropTreeItemArea item={item} onDrop={handleDrop} />
      <DatasourceComponent {...(component as DatasourceComponentType)} />
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
