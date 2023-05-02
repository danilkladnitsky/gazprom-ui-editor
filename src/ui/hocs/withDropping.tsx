import { ConnectDropTarget, useDrop } from 'react-dnd';

import { ELEMENT_TYPE, IBaseComponent } from 'domain/component';

export type DroppingComponentProps<Item extends IBaseComponent> = {
  isOver: boolean;
  droppingItem?: Item;
  dropRef: ConnectDropTarget;
}

export type DropRenderProps<Item extends IBaseComponent> = {
  accept: ELEMENT_TYPE[];
  onDrop: (item: Item) => void;
  children: (props: DroppingComponentProps<Item>) => JSX.Element;

};

export const WithDropping = <Item extends IBaseComponent>({ accept, onDrop, children }
  : DropRenderProps<Item>) => {
  const [props, dropRef] = useDrop(() => ({
    accept,
    drop: onDrop,
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        droppingItem: monitor.getItem(),
      };
    },
  }));

  return children({ ...props, dropRef });
};
