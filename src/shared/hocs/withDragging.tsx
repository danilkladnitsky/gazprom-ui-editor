import React, { FC } from "react";
import { useDrag } from "react-dnd";

import { ALLOWED_TYPES_FOR_DND } from "shared/constants/drag-and-drop";
import { useComponent } from "shared/hooks/useComponent";

import { SchemaTree } from "entities/app-configuration/domain";
import { DragAndDropAlias } from "entities/drag-and-drop/domain";

import styles from "./withDragging.module.scss";
import { toDragItem } from "entities/drag-and-drop/utils";

export type withDraggingProps = {
  isDragging: boolean;
  item: SchemaTree;
};

export const withDragging = <Props extends withDraggingProps>(
  DraggedComponent: FC<Props> | undefined,
  alias: DragAndDropAlias
) => {
  return function Wrapper(props: Props) {
    const component = useComponent(props.item.id);

    if (!component) {
      return null;
    }

    const canBeDragged = ALLOWED_TYPES_FOR_DND.includes(component?.code);

    const [{ isDragging }, drag] = useDrag(() => ({
      type: alias,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging() && canBeDragged,
      }),
      item: toDragItem(component, alias),
      canDrag: canBeDragged,
    }));

    return (
      <div ref={drag} className={styles.draggedComponent}>
        {DraggedComponent && (
          <DraggedComponent {...props} isDragging={isDragging} />
        )}
      </div>
    );
  };
};
