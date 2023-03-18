import React, { FC } from 'react';

import styles from "./Group.module.scss";
import { ComponentProps } from './types';

export const Group = ({ children }: ComponentProps) => {
  return (
    <div className={styles.group}>
      {children}
      </div>
  )
}
