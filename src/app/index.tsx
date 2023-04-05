import { ThemeProvider } from "@mui/system";
import React from "react";
import { SnackbarProvider } from "notistack";

import appTheme from "shared/themes/AppTheme";
import { ComponentSettings, ComponentsPanel, Configuration } from "widgets";

import styles from "./styles.module.scss";
import { useAppConfigurationModel } from "entities/app-configuration";
import { AppHeader } from "widgets/AppHeader";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const App: React.FC = () => {
  const { configuration } = useAppConfigurationModel();

  const canEditForm = Boolean(configuration);

  return (
    <ThemeProvider theme={appTheme}>
      <SnackbarProvider>
        <DndProvider backend={HTML5Backend}>
          <div className={styles.appWrapper}>
            <AppHeader />
            <div className={styles.app}>
              {canEditForm && <ComponentsPanel className={styles.panel} />}
              <Configuration className={styles.configuration} />
              {canEditForm && <ComponentSettings className={styles.settings} />}
            </div>
          </div>
        </DndProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
