import React, { ReactNode } from "react";

import { useComponentModel } from "entities/component";
import { TreeTemplateProps } from "features/configuration/render/render-component-tree";

import ElementItem from "./ElementItem";

import styles from "./FormElement.module.scss";
import DropZone from "./DropZone";
import { Component } from "entities/component/domain";
import { ALLOWED_TYPES_FOR_DND } from "shared/constants/drag-and-drop";

function FormElement({ children, item }: TreeTemplateProps) {
  const { id } = item;

  const { components, swapComponents } = useComponentModel();

  const component = components.find((c) => c.id === id);

  if (!component) {
    return null;
  }

  const handleDrop = (droppedItem: Component) => {
    swapComponents(item.id, droppedItem.id);
  };

  const renderDropZone = ALLOWED_TYPES_FOR_DND.includes(component.code);

  return (
    <div className={styles.element}>
      {renderDropZone && <DropZone item={item} onDrop={handleDrop} />}
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
