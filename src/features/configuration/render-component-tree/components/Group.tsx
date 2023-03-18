import React, { FC } from 'react';

import styles from "./Group.module.scss";

export const Group: FC = ({ children }) => {
  return (
    <div className={styles.group}>
      {children}
      </div>
  )
}
