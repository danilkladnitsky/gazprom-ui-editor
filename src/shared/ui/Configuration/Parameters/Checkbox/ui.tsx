import React from 'react';
import { Checkbox as UICheckbox } from 'ui/shared/Checkbox';

import styles from '../styles.module.scss';

type Props = {
  name: string;
};

export const Checkbox = ({ name }: Props) => {
  return (
    <UICheckbox name={name} className={styles.input} />
  );
};
