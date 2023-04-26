import React from 'react';
import { useAppStore } from 'store/appStore';
import { TreeTemplateProps } from 'ui/components/TreeStructure';
import { withDragging } from 'ui/hocs/withDragging';
import { withDropping } from 'ui/hocs/withDropping';

import { ELEMENT_TYPE, IComponent } from 'domain/component';

type Props = TreeTemplateProps<IComponent>;

const DRAGGABLE_TYPES = [ELEMENT_TYPE.ELEMENT, ELEMENT_TYPE.GROUP];

export const HierarchyFormItem = (props: Props) => {
  const { replaceComponent } = useAppStore();

  const { item, children } = props;
  const isDraggable = DRAGGABLE_TYPES.includes(item.type);

  const onDrop = (droppedItem: IComponent) => {
    replaceComponent(droppedItem, item.code);
  };

  if (isDraggable) {
    const DraggedComponent = withDragging(
      {
        item,
        dragAlias: item.type,
      })(DraggedItem);
    return <DraggedComponent {...props} />;
  }

  const DropZone = withDropping(
    {
      allowedAliases: [ELEMENT_TYPE.ELEMENT],
      onDrop,
    })(DroppedItem);

  return (
    <div>
      {item.name}
      {children}
      <DropZone item={props.item} />
    </div>
  );
};

const DraggedItem = ({ item, children }: Props) => {
  return (
    <div>
     + {item.name}
      {children}
    </div>
  );
};

const DroppedItem = ({ item }: {item: IComponent}) => {
  return (
    <div>
      Drop her {item.name}
    </div>
  );
};
