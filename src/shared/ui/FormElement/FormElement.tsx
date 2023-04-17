import React, { ReactNode, useState } from "react";

import { TreeTemplateProps } from "features/configuration/render/render-component-tree";

import ElementItem from "./ElementItem";

import DropZone from "./DropZone";
import { useComponent } from "shared/hooks/useComponent";

import { OnDragFn } from "entities/drag-and-drop/domain";
import { SchemaTree } from "entities/app-configuration/domain";
import { useAppConfigurationModel } from "entities/app-configuration";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { ListItem } from "@mui/material";

import styles from "./FormElement.module.scss";
import { ToggleArrow } from "../ToggleArrow";

function FormElement({ children, item }: TreeTemplateProps) {
  const [expanded, setExpanded] = useState(true);
  const { swapComponents } = useAppConfigurationModel();

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
      <ListItem direction={"row"}>
        <ElementItem item={component} title={component?.name || ""} />
        {children && (
          <ToggleArrow
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          />
        )}
      </ListItem>
      {expanded && <ElementChildren list={children} />}
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
