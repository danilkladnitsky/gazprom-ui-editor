import React, { ComponentType } from 'react';
import { useDrop } from 'react-dnd';

export type DropFn<Item> = (item: Item) => void

type DroppingProps<Item> = {
    allowedAliases: string[];
    onDrop?: (item: Item) => void;
}

export const withDropping =
    <Item,>({ allowedAliases, onDrop }: DroppingProps<Item>) => {
      return <P extends object>(Component: ComponentType<P>) => {
        return function Wrapped(props: P) {
          const [, drop] = useDrop(() => ({
            accept: allowedAliases,
            drop: onDrop,
            collect: (monitor) => {
              return {
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
                item: monitor.getItem(),
              };
            },
          }));

          return <div ref={drop}>
            <Component {...props} />
          </div>;

        };
      };
    };
