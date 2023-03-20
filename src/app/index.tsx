import { ThemeProvider } from "@mui/system";
import React from "react";
import { SnackbarProvider } from "notistack";

import appTheme from "shared/themes/AppTheme";
import { ComponentSettings, ComponentsPanel, Configuration } from "widgets";

import styles from "./styles.module.scss";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <SnackbarProvider>
        <div className={styles.app}>
          <ComponentsPanel className={styles.panel} />
          <Configuration className={styles.configuration} />
          <ComponentSettings className={styles.settings} />
        </div>
        ;
      </SnackbarProvider>
    </ThemeProvider>
  );
};
