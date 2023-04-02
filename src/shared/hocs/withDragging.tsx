import classNames from "classnames";
import { SchemaTree } from "entities/app-configuration/domain";
import React, { FC } from "react";
import { useDrag } from "react-dnd";
import { ALLOWED_TYPES_FOR_DND } from "shared/constants/drag-and-drop";
import { useComponent } from "shared/hooks/useComponent";

import styles from "./withDragging.module.scss";

export type withDraggingProps = {
  isDragging: boolean;
  item: SchemaTree;
};

export const withDragging = <Props extends withDraggingProps>(
  DraggedComponent: FC<Props>,
  alias: DragAndDropAlias
) => {
  return function Wrapper(props: Props) {
    const component = useComponent(props.item.id);
    const { code } = component;

    const canBeDragged = ALLOWED_TYPES_FOR_DND.includes(code);

    const [{ isDragging }, drag] = useDrag(() => ({
      type: alias,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging() && canBeDragged,
      }),
      item: component,
      canDrag: canBeDragged,
    }));

    return (
      <div ref={drag} className={styles.draggedComponent}>
        <DraggedComponent {...props} isDragging={isDragging} />
      </div>
    );
  };
};
