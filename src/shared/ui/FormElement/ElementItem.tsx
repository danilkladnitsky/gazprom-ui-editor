import React from "react";

import classNames from "classnames";

import { ALLOWED_TYPES_FOR_DND } from "shared/constants/drag-and-drop";
import { withDragging, withDraggingProps } from "shared/hocs/withDragging";

import styles from "./ElementItem.module.scss";
import { useComponent } from "shared/hooks/useComponent";
import { SchemaTree } from "entities/app-configuration/domain";

type Props = {
  title: string;
  className?: string;
  item: SchemaTree;
} & withDraggingProps;

function ElementItem({ title, item, className, isDragging }: Props) {
  const { code } = useComponent(item.id);

  const withDragging = ALLOWED_TYPES_FOR_DND.includes(code);

  return (
    <div
      className={classNames(
        styles.element,
        {
          [styles.withDragging]: withDragging,
          [styles.isDragging]: isDragging,
        },
        className
      )}
    >
      {title}
    </div>
  );
}

export default withDragging(ElementItem, "component-list");
