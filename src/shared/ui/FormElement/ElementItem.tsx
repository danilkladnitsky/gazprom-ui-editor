import { Skeleton } from "@mui/material";
import classNames from "classnames";
import { Component } from "entities/component/domain";
import React from "react";
import { ALLOWED_TYPES_FOR_DND } from "shared/constants/drag-and-drop";

import { Draggable, DraggableProps } from "../Draggable";

import styles from "./ElementItem.module.scss";

type Props = DraggableProps & {
  title: string;
  className?: string;
  item: Component;
};

function ElementItem({ title, item, className, isDragging }: Props) {
  if (isDragging) {
    return null;
  }

  const draggable = ALLOWED_TYPES_FOR_DND.includes(item.code);

  return (
    <div
      className={classNames(
        styles.element,
        { [styles.draggable]: draggable },
        className
      )}
    >
      {title}
    </div>
  );
}

export default Draggable("element", ElementItem);
