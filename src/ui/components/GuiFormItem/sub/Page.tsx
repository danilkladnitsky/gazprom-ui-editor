import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Stack, Typography } from '@mui/material';
import { useAppStore } from 'store/appStore';
import { useComponentsStore } from 'store/componentStore';
import { DropZone } from 'ui/components/HierarchyFormItem/sub/DropZone';
import { WithDropping } from 'ui/hocs/withDropping';

import { ELEMENT_TYPE, IComponent, IPage } from 'domain/component';
import { TREE_ACTIONS } from 'domain/tree';

import { ViewFormItemProps } from './types';

export const Page = ({ item, children, onClick, position }: ViewFormItemProps<IPage>) => {
  const activePageIndex = useComponentsStore(state => state.activePageIndex);
  const modifyTree = useAppStore(state => state.modifyTree);

  const [animRef] = useAutoAnimate();
  const { properties } = item;

  const handleClick = () => {
    onClick?.(item);
  };

  const onDrop = (dropped: IComponent) => {
    modifyTree(TREE_ACTIONS.COPY_TO_PARENT, { nodeId: dropped.code, parentId: item.code });
  };

  if (activePageIndex !== position) {
    return null;
  }

  const isHidden = properties?.hidden;

  return (
    <Stack spacing={1}>
      <Typography variant="body1" onClick={handleClick}>{item.name}</Typography>
      <WithDropping accept={[ELEMENT_TYPE.ELEMENT, ELEMENT_TYPE.GROUP]} onDrop={onDrop}>
        {DropZone}
      </WithDropping>
      {!isHidden && <Stack ref={animRef} spacing={2}>
        {children}
      </Stack>}
    </Stack>
  );
};
