import React from "react";

import { Checkbox, FormControlLabel } from "@mui/material";

import { DropdownInput, DropdownItem } from "shared/ui/DropdownInput";
import { TextInput } from "shared/ui/TextInput";
import { Header } from "shared/ui/Header";
import { FieldId, FieldParameter, useParameterModel } from "entities/parameter";

import styles from "./styles.module.scss";

const convertParametersToList = (params: FieldParameter[]): DropdownItem<FieldId>[] => {
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
        <div>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Подсказка к полю"
          />
          <TextInput
            fullWidth
            className={styles.hint}
            rows={3}
            label="Текст подсказки"
            multiline
          />
        </div>
      </div>
    </div>
  );
};
