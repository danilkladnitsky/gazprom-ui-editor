import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { SnackbarProvider } from 'notistack';
import { ComponentSettings, ComponentsPanel, Configuration } from 'widgets';
import { AppHeader } from 'widgets/AppHeader';

import { appTheme, themeFonts } from 'shared/themes/AppTheme';

import styles from './styles.module.scss';

export const App: React.FC = () => {

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles styles={themeFonts} />
      <SnackbarProvider>
        <DndProvider backend={HTML5Backend}>
          <div className={styles.appWrapper}>
            <AppHeader />
            <div className={styles.app}>
              <ComponentsPanel className={styles.panel} />
              <Configuration className={styles.configuration} />
              <ComponentSettings className={styles.settings} />
            </div>
          </div>
        </DndProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
