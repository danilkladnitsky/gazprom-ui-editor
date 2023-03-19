import React from "react";

import { DropdownInput, DropdownItem } from "shared/ui/DropdownInput";
import { TextInput } from "shared/ui/TextInput";
import { Header } from "shared/ui/Header";
import { Parameter, useParameterModel } from "entities/parameter";
import { useComponentModel } from "entities/component";

import { EditParameterFields } from "../edit-parameter-fields";

import styles from "./styles.module.scss";

const convertParametersToList = (params: Parameter[]): DropdownItem[] => {
  return params.map((param) => ({
    label: param.name,
    value: param.id,
  }));
};

export const EditComponent = () => {
  const { parameters, selectedParameter, selectParameter } =
    useParameterModel();
  const { updateSelectedComponent, selectedComponent } = useComponentModel();

  const list = convertParametersToList(parameters);

  const updateComponent = (parameter: Parameter) => {
    selectParameter(parameter.id);
    updateSelectedComponent({ parameter });
  };

  const updateLabel = (name: string) => {
    updateSelectedComponent({ name });
  };

  const componentLabel = selectedComponent?.name || "";

  return (
    <div className={styles.wrapper}>
      <Header>Настройки компоненты</Header>
      <div className={styles.form}>
        <DropdownInput
          list={list}
          onChange={selectParameter}
          name="Выберите источник данных"
        />
        <TextInput
          fullWidth
          label="Введите название поля"
          value={componentLabel}
          onChange={updateLabel}
        />
        {selectedParameter && (
          <EditParameterFields
            parameter={selectedParameter}
            onEdit={updateComponent}
          />
        )}
      </div>
    </div>
  );
};
