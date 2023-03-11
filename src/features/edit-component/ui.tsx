import React from "react";

import { DropdownInput, DropdownItem } from "shared/ui/DropdownInput";
import { TextInput } from "shared/ui/TextInput";
import { Header } from "shared/ui/Header";
import { Parameter, useParameterModel } from "entities/parameter";

import styles from "./styles.module.scss";
import { EditComponentParameters } from "features/edit-component-parameters";

const convertParametersToList = (params: Parameter[]): DropdownItem[] => {
  return params.map(param => ({
    label: param.label,
    value: param.id
  }))
}

export const EditComponent = () => {
  const { parameters, selectParameter } = useParameterModel();

  const list = convertParametersToList(parameters);

  return (
    <div className={styles.wrapper}>
      <Header>Настройки компоненты</Header>
      <div className={styles.form}>
        <DropdownInput list={list} onChange={selectParameter} name="Выберите источник данных" />
        <TextInput fullWidth label="Введите название поля" />
        <EditComponentParameters />
      </div>
    </div>
  );
};
