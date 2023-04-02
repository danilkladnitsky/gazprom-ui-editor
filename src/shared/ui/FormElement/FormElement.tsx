import React, { ReactNode } from "react";

import { useComponentModel } from "entities/component";
import { TreeTemplateProps } from "features/configuration/render/render-component-tree";

import ElementItem from "./ElementItem";

import styles from "./FormElement.module.scss";
import DropZone from "./DropZone";
import { Component } from "entities/component/domain";
import { ALLOWED_TYPES_FOR_DND } from "shared/constants/drag-and-drop";
import { useComponent } from "shared/hooks/useComponent";

function FormElement({ children, item }: TreeTemplateProps) {
  const { swapComponents } = useComponentModel();

  const component = useComponent(item.id);

  if (!component) {
    return null;
  }

  const handleDrop = (droppedItem: Component) => {
    swapComponents(component.id, droppedItem.id);
  };

  const renderDropZone = ALLOWED_TYPES_FOR_DND.includes(component.code);

  return (
    <div className={styles.element}>
      {renderDropZone && <DropZone item={component} onDrop={handleDrop} />}
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
