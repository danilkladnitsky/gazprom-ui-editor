import React from 'react';
import { useComponentsStore } from 'store/componentStore';
import { useParametersStore } from 'store/parameterStore';
import { DropdownInput } from 'ui/shared/DropdownInput';

import { ELEMENT_TYPE, IComponent } from 'domain/component';
import { DATASOURCE_TYPE, IParameter } from 'domain/parameter';

import { DropdownItem } from 'shared/ui/DropdownInput';

const convertToList = (params: IParameter[]): DropdownItem[] => {
  return params.map(p => ({ label: p.name, value: p.type }));
};

export const SelectDatasource = () => {
  const {
    selectedComponentId,
    components,
    updateSelectedComponent,
  } = useComponentsStore();
  const { parameters } = useParametersStore();

  const updateDatasource = (type: string) => {
    const selectedComponent = components
      .find(c => c.code === selectedComponentId);

    if (selectedComponent?.type !== ELEMENT_TYPE.ELEMENT) {
      return;
    }

    const component: IComponent = {
      ...selectedComponent, dataSource: {
        ...selectedComponent.dataSource,
        type: type as DATASOURCE_TYPE,
      },
    };

    updateSelectedComponent(component);
  };

  return (
    <DropdownInput onChange={updateDatasource} name="Источник данных" list={convertToList(parameters)} />
  );
};
