import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Typography } from '@mui/material';
import { Stack, StackProps } from '@mui/system';
import { useAppStore } from 'store/appStore';
import { DropZone } from 'ui/components/HierarchyFormItem/sub/DropZone';
import { WithDropping } from 'ui/hocs/withDropping';

import { ELEMENT_TYPE, IComponent, IGroup } from 'domain/component';
import { TREE_ACTIONS } from 'domain/tree';

import { ViewFormItemProps } from './types';

const mapGroupModeToCss =(align: string): StackProps => {
  switch (align) {
  case 'FORCE_HORIZONTAL':
    return { direction: 'row', alignItems: 'center' };
  case 'HORIZONTAL':
    return { rowGap: 2, flexWrap: 'wrap', direction: 'row', alignItems: 'center' };
  case 'VERTICAL':
  default:
    return { direction: 'column' };
  }
};
export const Group = ({ item, children, onClick }: ViewFormItemProps<IGroup>) => {
  const modifyTree = useAppStore(state => state.modifyTree);
  const [animRef] = useAutoAnimate();

  const { properties } = item;

  const handleClick = () => {
    onClick?.(item);
  };

  const onDrop = (dropped: IComponent) => {
    modifyTree(TREE_ACTIONS.COPY_TO_PARENT, { nodeId: dropped.code, parentId: item.code });
  };

  const isHidden = properties?.hidden;

  return (
    <Stack spacing={1}>
      <Typography variant="body2" onClick={handleClick}>{item.name}</Typography>
      <WithDropping accept={[ELEMENT_TYPE.ELEMENT]} onDrop={onDrop}>
        {DropZone}
      </WithDropping>
      {!isHidden &&
        <Stack
          spacing={2}
          {...mapGroupModeToCss(properties?.direction || 'VERTICAL')}
          ref={animRef}>
          {children}
        </Stack>}
    </Stack>
  );
};
