import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';

import styles from './styles.module.scss';

export type CheckboxProps = Omit<MuiCheckboxProps, 'onChange'> & {
  onChange?: (value: boolean) => void;
}

export const Checkbox = ({ name, onChange, ...rest }: CheckboxProps) => {

  const onChangeCallack = (event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean) => {
    onChange?.(checked);
  };

  return (
    <div className={styles.wrapper}>
      <MuiCheckbox
        onChange={onChangeCallack}
        disableRipple
        className={styles.checkbox} {...rest}
      />
      {name}
    </div>
  );
};
