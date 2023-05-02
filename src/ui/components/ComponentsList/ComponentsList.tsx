import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useComponentsStore } from 'store/componentStore';
import { WithDragging } from 'ui/hocs/withDragging';

import { IComponent } from 'domain/component';

import { ListItemProps } from 'shared/ui/List';
import { getComponentIcon } from 'shared/utils/getComponentIcon';

import { List } from '../../shared/List';

const convertToList = (components: IComponent[]): ListItemProps[] => {
  return components.map((p) => ({ item: { id: p.code, name: p.name } }));
};

export const ComponentsList = () => {
  const components = useComponentsStore(state => state.components);

  return (
    <List data={convertToList(components)} listItem={ComponentItem} />
  );
};

const ComponentItem = ({ item }: ListItemProps) => {
  const components = useComponentsStore(state => state.components);

  const currentComponent = components.find(c => c.code === item.id);

  if (!currentComponent) {
    return '';
  }

  const Icon = getComponentIcon(currentComponent);

  return <WithDragging item={currentComponent} type={currentComponent.type}>
    {({ dragRef }) => <Typography variant="body2" ref={dragRef}>
      <Stack direction={'row'} columnGap={1} alignContent={'center'}>
        <Icon color="info" />
        {item.name}
      </Stack>
    </Typography>}
  </WithDragging>;
};
