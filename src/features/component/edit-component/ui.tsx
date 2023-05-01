import React from 'react';
import { useComponentModel } from 'entities/component';
import { useParameterModel } from 'entities/parameter';
import { Parameter, ParameterType } from 'entities/parameter/domain';

import { DropdownInput, DropdownItem } from 'shared/ui/DropdownInput';
import { Header } from 'shared/ui/Header';
import { TextInput } from 'shared/ui/TextInput';

import DeleteComponent from '../delete-component/ui';
import { EditGroup } from '../edit-group';
import { EditParameterFields } from '../edit-parameter-fields';

import styles from './styles.module.scss';

const convertParametersToList = (params: Parameter[]): DropdownItem[] => {
  return params.map((param) => ({
    label: param.name,
    value: param.type,
  }));
};

export const EditComponent = () => {
  const { parameters } = useParameterModel();
  const { updateSelectedComponent, selectedComponent } = useComponentModel();

  const list = convertParametersToList(parameters);
  const dataSource =
    selectedComponent?.code === 'element' && selectedComponent?.dataSource;

  const updateComponentDatasource = (dataSource: Parameter) => {
    const updated = { ...selectedComponent, dataSource };

    updateSelectedComponent(updated);
  };

  const updateDatasourceType = (type: ParameterType) => {
    const updated = {
      ...selectedComponent,
      dataSource: {
        ...dataSource,
        type,
      },
    };

    updateSelectedComponent(updated);
  };

  const updateLabel = (name: string) => {
    const updated = { ...selectedComponent, name };
    updateSelectedComponent(updated);
  };

  const componentLabel = selectedComponent?.name || '';

  return (
    <div className={styles.wrapper}>
      <Header>Настройки компоненты</Header>
      {selectedComponent && (
        <div className={styles.form}>
          {dataSource && (
            <DropdownInput
              list={list}
              onChange={updateDatasourceType} // TODO: replace with component analogue
              name="Выберите источник данных"
            />
          )}
          {selectedComponent.code === 'group' && <EditGroup />}
          <TextInput
            fullWidth
            label="Введите название поля"
            value={componentLabel}
            onChange={updateLabel}
          />
          {dataSource && (
            <EditParameterFields
              parameter={dataSource}
              onEdit={updateComponentDatasource}
            />
          )}
          <DeleteComponent id={selectedComponent?.id} />
        </div>
      )}
    </div>
  );
};
