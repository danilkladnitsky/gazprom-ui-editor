import React from 'react'

import { DropdownInput, DropdownItem } from 'shared/ui/DropdownInput';

import styles from "./styles.module.scss";
import { TextInput } from 'shared/ui/TextInput';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Header } from 'shared/ui/Header';

const DEFAULT_SOURCE: DropdownItem[] = [
    { label: "Параметр #1", value: "int" }
];

export const EditComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Header>
            Настройки компоненты
      </Header>
      <div className={styles.form}>
        <DropdownInput list={DEFAULT_SOURCE} name="Выберите источник данных" />
        <TextInput fullWidth label="Введите название поля" />
        <div>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Подсказка к полю" />
          <TextInput fullWidth className={styles.hint} rows={3} label="Текст подсказки" multiline />
        </div>
        </div>
    </div>
  )
}
