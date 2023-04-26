import React, { FC } from 'react';
import { useDrop } from 'react-dnd';
import { SchemaTree } from 'entities/app-configuration/domain';
import {
  DragAndDropAlias,
  DragItem,
  OnDropFn,
} from 'entities/drag-and-drop/domain';

export type withDroppingProps<I> = {
  isHovered?: boolean;
  onDrop: OnDropFn<I>;
  onHover?: (item: I) => void;
  droppingItem?: DragItem<SchemaTree>;
};

export const withDropping = <
  Item extends SchemaTree,
  Props extends { item: Item } & withDroppingProps<Item>
>(
    Component: FC<Props & withDroppingProps<Item>>,
    alias: DragAndDropAlias[],
  ) => {
  return function Wrapper(props: Props) {
    const [collectedProps, drop] = useDrop(() => ({
      accept: alias,
      drop: props.onDrop,
      collect: (monitor) => {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
          droppingItem: monitor.getItem(),
        };
      },
    }));

    return (
      <div ref={drop}>
        <Component
          {...props}
          onDrop={props.onDrop}
          isHovered={collectedProps.isOver}
          droppingItem={collectedProps.droppingItem}
        />
      </div>
    );
  };
};
