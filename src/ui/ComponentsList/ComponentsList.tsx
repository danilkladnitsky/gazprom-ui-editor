import React from 'react';
import { useComponentsStore } from 'store/componentStore';
import { GenerateForm } from 'ui/GenerateForm';
import List from 'ui/List/List';

import { IComponent } from 'domain/component';

import { ListItemProps } from 'shared/ui/List';

const convertToList = (components: IComponent[]): ListItemProps[] => {
  return components.map((p) => ({ item: { id: p.code, name: p.name } }));
};
export const ComponentsList = () => {
  const { components } = useComponentsStore();

  return (
    <>
      <List data={convertToList(components)} />
      <GenerateForm />
    </>
  );
};
