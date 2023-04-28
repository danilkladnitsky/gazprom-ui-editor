import React, { ComponentType, ReactNode } from 'react';
import { useDrop } from 'react-dnd';

export type DropFn<Item> = (item: Item) => void

type DroppingProps<Item> = {
    allowedAliases: string[];
    onDrop?: (item: Item) => void;
}

export type DropComponentProps = {
  isHovered: boolean;
}

export const withDropping =
    <Item,>({ allowedAliases, onDrop }: DroppingProps<Item>) => {
      return <P extends DropComponentProps>(Component: ComponentType<P>)
        : ComponentType<Omit<P, 'isHovered'>> => {
        return function Wrapped(props: P): ReactNode {
          const [{ isOver }, drop] = useDrop(() => ({
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
            <Component {...props} isHovered={isOver} />
          </div>;

        };
      };
    };
