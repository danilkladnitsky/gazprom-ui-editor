import React from "react";

import { DropdownInput, DropdownItem } from "shared/ui/DropdownInput";
import { TextInput } from "shared/ui/TextInput";
import { Header } from "shared/ui/Header";
import { useParameterModel } from "entities/parameter";
import { useComponentModel } from "entities/component";

import { EditParameterFields } from "../edit-parameter-fields";

import styles from "./styles.module.scss";
import { Parameter, ParameterType } from "entities/parameter/domain";
import DeleteComponent from "../delete-component/ui";

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
  const dataSource = selectedComponent?.dataSource;

  const updateComponentDatasource = (dataSource: Parameter) => {
    const updated = { ...selectedComponent, dataSource };

    updateSelectedComponent(updated);
  };

  const updateDatasourceType = (type: ParameterType) => {
    const updated = {
      ...selectedComponent,
      dataSource: {
        ...selectedComponent?.dataSource,
        type,
      },
    };

    updateSelectedComponent(updated);
  };

  const updateLabel = (name: string) => {
    const updated = { ...selectedComponent, name };
    updateSelectedComponent(updated);
  };

  const componentLabel = selectedComponent?.name || "";

  return (
    <div className={styles.wrapper}>
      <Header>Настройки компоненты</Header>
      {selectedComponent && (
        <div className={styles.form}>
          <DropdownInput
            list={list}
            onChange={updateDatasourceType} // TODO: replace with component analogue
            name="Выберите источник данных"
          />
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
