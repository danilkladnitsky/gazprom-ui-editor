import React from 'react';
import { ComponentSettings, ComponentsPanel, Configuration } from 'widgets';

import styles from "./styles.module.scss";

export const App: React.FC = () => {
  return <div className={styles.app}>
    <ComponentsPanel className={styles.panel} />
    <Configuration className={styles.configuration} />
    <ComponentSettings className={styles.settings} />
  </div>;
};

