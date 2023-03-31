import { Component } from "entities/component/domain";
import React, { FC } from "react";
import { useDrop } from "react-dnd";

export type DroppableProps<I> = {
  item: I;
  onDrop: (item: I) => void;
  onHover?: (item: I) => void;
  isHovered?: boolean;
};

export const Droppable = <
  Item extends Component,
  Props extends DroppableProps<Item>
>(
  Component: FC<Props>
) => {
  return function Wrapper(props: Props) {
    const [collectedProps, drop] = useDrop(() => ({
      accept: "element",
      drop: props.onDrop,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }));

    return (
      <div ref={drop}>
        <Component
          {...props}
          onDrop={props.onDrop}
          isHovered={collectedProps.isOver}
        />
      </div>
    );
  };
};
