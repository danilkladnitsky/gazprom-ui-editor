import React from 'react';

import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';

import styles from "./styles.module.scss";

export const Checkbox = (props: CheckboxProps) => {
    return <MuiCheckbox disableRipple className={styles.checkbox} {...props} />;
};
