import React from "react";

import classNames from "classnames";

import { ALLOWED_TYPES_FOR_DND } from "shared/constants/drag-and-drop";
import { withDragging, withDraggingProps } from "shared/hocs/withDragging";

import styles from "./ElementItem.module.scss";
import { useComponent } from "shared/hooks/useComponent";
import { SchemaTree } from "entities/app-configuration/domain";
import { getComponentIcon } from "shared/utils/getComponentIcon";
import { useComponentModel } from "entities/component";

type Props = {
  title: string;
  className?: string;
  item: SchemaTree;
} & withDraggingProps;

function ElementItem({ title, item, className, isDragging }: Props) {
  const component = useComponent(item.id);
  const { selectedComponent, selectComponent } = useComponentModel();

  if (!component) {
    return;
  }

  const withDragging = ALLOWED_TYPES_FOR_DND.includes(component?.code);
  const Icon = getComponentIcon(component.code);

  const handleSelect = () => {
    selectComponent(component.id);
  };

  const isSelected = selectedComponent?.id === component.id;

  return (
    <div
      onClick={handleSelect}
      className={classNames(
        styles.element,
        {
          [styles.withDragging]: withDragging,
          [styles.isDragging]: isDragging,
          [styles.isSelected]: isSelected,
        },
        className
      )}
    >
      <Icon fontSize={"small"} />
      {title}
    </div>
  );
}

export default withDragging(ElementItem, "component-list");
