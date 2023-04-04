import { SchemaTree } from "entities/app-configuration/domain";
import React, { FC } from "react";
import { useDrop } from "react-dnd";

export type withDroppingProps<I> = {
  isHovered?: boolean;
  onDrop: (item: I) => void;
  onHover?: (item: I) => void;
};

export const withDropping = <
  Item extends SchemaTree,
  Props extends { item: Item } & withDroppingProps<Item>
>(
  Component: FC<Props & withDroppingProps<Item>>,
  alias: DragAndDropAlias[]
) => {
  return function Wrapper(props: Props) {
    const [collectedProps, drop] = useDrop(() => ({
      accept: alias,
      drop: props.onDrop,
      collect: (monitor) => {
        const hoveredOverSelf = monitor.getItem()?.id === props.item.id;

        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop() && !hoveredOverSelf,
        };
      },
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
