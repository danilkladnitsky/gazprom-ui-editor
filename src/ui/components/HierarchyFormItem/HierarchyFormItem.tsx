import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Stack } from '@mui/system';
import classNames from 'classnames';
import { useAppStore } from 'store/appStore';
import { useComponentsStore } from 'store/componentStore';
import { TreeTemplateProps } from 'ui/components/TreeStructure';
import { withDragging } from 'ui/hocs/withDragging';
import { DropComponentProps, withDropping } from 'ui/hocs/withDropping';

import { ELEMENT_TYPE, IComponent } from 'domain/component';
import { TreeItem } from 'domain/tree';

import { getComponentIcon } from 'shared/utils/getComponentIcon';

import styles from './HierarchyFormItem.module.scss';

type Props = TreeTemplateProps<TreeItem>;

const DRAGGABLE_TYPES = [ELEMENT_TYPE.ELEMENT];

export const HierarchyFormItem = (props: Props) => {
  const { replaceComponent } = useAppStore();
  const components = useComponentsStore((state) => state.components);

  const [ref] = useAutoAnimate();

  const { item, children } = props;
  const currentComponent = components.find(c => c.code === item.code);

  if (!currentComponent) {
    return props.children;
  }

  const isDraggable = DRAGGABLE_TYPES.includes(currentComponent.type);

  const onDrop = (droppedItem: IComponent) => {
    replaceComponent(droppedItem, currentComponent.code);
  };

  const DropZone = withDropping(
    {
      allowedAliases: [ELEMENT_TYPE.ELEMENT],
      onDrop,
      item: currentComponent,
      className: styles.itemToDrop,
    })(DroppedItem);

  const DraggedComponent = withDragging(
    {
      item: currentComponent,
      dragAlias: currentComponent.type,
    })(DraggedItem);

  const FormItem = isDraggable ?
    <DraggedComponent {...props} />
    : currentComponent.name;

  return (
    <div className={styles.itemWrapper}>
      {FormItem}
      <DropZone />
      <Stack className={styles.childrenItem} ref={ref}>
        {children}
      </Stack>
    </div>
  );
};

const DraggedItem = ({ item, children, isDragging }
  : TreeTemplateProps<IComponent>) => {
  const Icon = getComponentIcon(item);

  if (isDragging) {
    return <></>;
  }

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
  const showHoverEffect = isHovered && originalItem.code !== droppingItem?.code;

  return (
    <div className={classNames(styles.dropPlaceholder,
      { [styles.isDropping]: showHoverEffect })}>
    </div>
  );
};
