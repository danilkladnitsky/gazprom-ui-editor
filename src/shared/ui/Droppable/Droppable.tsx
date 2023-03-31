import { Component } from "entities/component/domain";
import React, { FC } from "react";
import { useDrop } from "react-dnd";

export type DroppableProps<I> = {
  isHovered?: boolean;
  onDrop: (item: I) => void;
  onHover?: (item: I) => void;
};

export const Droppable = <
  Item extends Component,
  Props extends { item: Item } & DroppableProps<Item>
>(
  Component: FC<Props & DroppableProps<Item>>
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
          ref={drop}
        />
      </div>
    );
  };
};
