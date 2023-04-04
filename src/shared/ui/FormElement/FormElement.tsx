import React, { ReactNode } from "react";

import { useComponentModel } from "entities/component";
import { TreeTemplateProps } from "features/configuration/render/render-component-tree";

import ElementItem from "./ElementItem";

import DropZone from "./DropZone";
import { useComponent } from "shared/hooks/useComponent";

import styles from "./FormElement.module.scss";
import { OnDragFn } from "entities/drag-and-drop/domain";
import { SchemaTree } from "entities/app-configuration/domain";

function FormElement({ children, item }: TreeTemplateProps) {
  const { swapComponents } = useComponentModel();

  const component = useComponent(item.id);

  if (!component) {
    return null;
  }

  const handleDrop: OnDragFn<SchemaTree> = (droppedItem) => {
    swapComponents(component.id, droppedItem.item.id);
  };

  return (
    <div className={styles.element}>
      <DropZone item={component} onDrop={handleDrop} />
      <ElementItem item={component} title={component?.name || ""} />
      <ElementChildren list={children} />
    </div>
  );
}

type ElementChildrenProps = {
  list: ReactNode;
};

function ElementChildren({ list }: ElementChildrenProps) {
  return <div className={styles.group}>{list}</div>;
}

export default FormElement;
