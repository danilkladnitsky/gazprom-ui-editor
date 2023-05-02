import { ConnectDropTarget, useDrag } from 'react-dnd';

import { ELEMENT_TYPE, IBaseComponent } from 'domain/component';

export type DraggingComponentProps = {
  isDragging: boolean;
  dragRef: ConnectDropTarget;
}

export type DragRenderProps<Item extends IBaseComponent> = {
  type: ELEMENT_TYPE;
  item: Item;
  children: (props: DraggingComponentProps) => JSX.Element;

};

export const WithDragging = <T extends IBaseComponent>({ children, type, item }
  : DragRenderProps<T>) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type,
    item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return children({ isDragging, dragRef });
};
