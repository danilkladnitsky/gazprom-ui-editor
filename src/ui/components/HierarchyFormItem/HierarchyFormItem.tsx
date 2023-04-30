import React from 'react';
import classNames from 'classnames';
import { useAppStore } from 'store/appStore';
import { TreeTemplateProps } from 'ui/components/TreeStructure';
import { withDragging } from 'ui/hocs/withDragging';
import { DropComponentProps, withDropping } from 'ui/hocs/withDropping';

import { ELEMENT_TYPE, IComponent } from 'domain/component';

import { getComponentIcon } from 'shared/utils/getComponentIcon';

import styles from './HierarchyFormItem.module.scss';

type Props = TreeTemplateProps<IComponent>;

const DRAGGABLE_TYPES = [ELEMENT_TYPE.ELEMENT];

export const HierarchyFormItem = (props: Props) => {
  const { replaceComponent } = useAppStore();

  const { item, children } = props;
  const isDraggable = DRAGGABLE_TYPES.includes(item.type);

  const onDrop = (droppedItem: IComponent) => {
    replaceComponent(droppedItem, item.code);
  };

  const DropZone = withDropping(
    {
      allowedAliases: [ELEMENT_TYPE.ELEMENT],
      onDrop,
      item,
      className: styles.itemToDrop,
    })(DroppedItem);

  const DraggedComponent = withDragging(
    {
      item,
      dragAlias: item.type,
    })(DraggedItem);

  const FormItem = isDraggable ?
    <DraggedComponent {...props} />
    : item.name;

  return (
    <div className={styles.itemWrapper}>
      {FormItem}
      <DropZone />
      <div className={styles.childrenItem}>
        {children}
      </div>
    </div>
  );
};

const DraggedItem = ({ item, children }: Props) => {
  const Icon = getComponentIcon(item);

  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <Icon />
        {item.name}
      </div>
      {children}
    </div>
  );
};

const DroppedItem = ({ isHovered, originalItem, droppingItem }:
  DropComponentProps<IComponent>) => {
  const showHoverEffect = isHovered && originalItem.code !== droppingItem.code;

  return (
    <div className={classNames(styles.dropPlaceholder,
      { [styles.isDropping]: showHoverEffect })}>
    </div>
  );
};
