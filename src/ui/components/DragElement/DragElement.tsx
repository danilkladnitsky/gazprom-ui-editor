import React, { ReactNode } from 'react';
import { ConnectDragSource } from 'react-dnd';

type DragElementProps = {
  children: ReactNode;
};

export const DragElement = React.forwardRef(({ children }: DragElementProps,
  ref: ConnectDragSource) => {
  return (
    <div ref={ref}>
      {children}
    </div>
  );
});
