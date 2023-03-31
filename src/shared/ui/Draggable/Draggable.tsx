import { Component } from "entities/component/domain";
import React, { FC } from "react";
import { useDrag } from "react-dnd";
import { ALLOWED_TYPES_FOR_DND } from "shared/constants/drag-and-drop";

export type DraggableProps = {
  isDragging: boolean;
};

export const Draggable = <Item extends Component, Props extends { item: Item }>(
  type: DragType,
  DragComponent: FC<Props & DraggableProps>
) => {
  return function Wrapper(props: Props) {
    const canBeDragged = ALLOWED_TYPES_FOR_DND.includes(props.item.code);

    const [{ isDragging }, drag] = useDrag(() => ({
      type,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging() && canBeDragged,
      }),
      item: props.item,
      canDrag: canBeDragged,
    }));

    return (
      <div ref={drag}>
        <DragComponent {...props} isDragging={isDragging} />
      </div>
    );
  };
};
