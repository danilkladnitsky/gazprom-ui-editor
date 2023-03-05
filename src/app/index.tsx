import { ThemeProvider } from "@mui/system";
import React from "react";
import appTheme from "shared/themes/AppTheme";
import { ComponentSettings, ComponentsPanel, Configuration } from "widgets";

import styles from "./styles.module.scss";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <div className={styles.app}>
        <ComponentsPanel className={styles.panel} />
        <Configuration className={styles.configuration} />
        <ComponentSettings className={styles.settings} />
      </div>
    </ThemeProvider>
  );
};
