import React, { ComponentType } from 'react';
import { useDrop } from 'react-dnd';

export type DropFn<Item> = (item: Item) => void

type DroppingProps<Item> = {
  item?: Item;
  allowedAliases: string[];
  className?: string;
  onDrop?: (item: Item) => void;
}

export type DropComponentProps<Item> = {
  isHovered: boolean;
  originalItem: Item;
  droppingItem: Item;
}

export const withDropping =
    <Item,>({ allowedAliases, onDrop, item, className }: DroppingProps<Item>) => {
      return <P extends DropComponentProps<Item>>(Component: ComponentType<P>)
        : ComponentType<Omit<P, keyof DropComponentProps<Item>>> => {
        return function Wrapped(props: P) {
          const [{ isOver, droppingItem }, drop] = useDrop(() => ({
            accept: allowedAliases,
            drop: onDrop,
            collect: (monitor) => {
              return {
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
                droppingItem: monitor.getItem(),
              };
            },
          }));

          return <div ref={drop} className={className}>
            <Component
              {...props}
              isHovered={isOver}
              originalItem={item}
              droppingItem={droppingItem}
            />
          </div>;

        };
      };
    };
