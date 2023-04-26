import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ThemeProvider } from "@mui/system";
import { useAppConfigurationModel } from "entities/app-configuration";
import { SnackbarProvider } from "notistack";
import { UploadParameters } from "ui/UploadParameters";
import { ComponentSettings, ComponentsPanel, Configuration } from "widgets";
import { AppHeader } from "widgets/AppHeader";

import appTheme from "shared/themes/AppTheme";

import styles from "./styles.module.scss";

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
              <ComponentsPanel className={styles.panel} />
              {/* <Configuration className={styles.configuration} />
              {canEditForm && <ComponentSettings className={styles.settings} />} */}
            </div>
          </div>
        </DndProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
