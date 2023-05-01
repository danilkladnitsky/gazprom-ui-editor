import React, { ComponentType } from 'react';
import { useDrag } from 'react-dnd';

export type DraggingProps<Item> = {
  item: Item;
  dragAlias: string;
}

export const withDragging =
  <Item,>({ dragAlias,item }: DraggingProps<Item>) => {
    return <P extends object>(Component: ComponentType<P>) => {
      return function Wrapped(props: P) {
        const [{ isDragging }, drag] = useDrag(() => ({
          type: dragAlias,
          item,
          collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
          }),
        }));

        return <div ref={drag}>
          <Component {...props} isDragging={isDragging} />
        </div>;

      };
    };
  };
