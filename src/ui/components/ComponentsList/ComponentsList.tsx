import React from 'react';
import { useComponentsStore } from 'store/componentStore';

import { IComponent } from 'domain/component';

import { ListItemProps } from 'shared/ui/List';

import { List } from '../../shared/List';

const convertToList = (components: IComponent[]): ListItemProps[] => {
  return components.map((p) => ({ item: { id: p.code, name: p.name } }));
};
export const ComponentsList = () => {
  const { components } = useComponentsStore();

  return (
    <List data={convertToList(components)} />
  );
};
