import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { SnackbarProvider } from 'notistack';
import { useAppStore } from 'store/appStore';
import { ComponentSettings, ComponentsPanel, Configuration } from 'widgets';
import { AppHeader } from 'widgets/AppHeader';

import { appTheme, themeFonts } from 'ui/themes/AppTheme';

import styles from './styles.module.scss';

export const App: React.FC = () => {
  const fullScreen = useAppStore((state) => state.fullScreen);
  const [ref] = useAutoAnimate();

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles styles={themeFonts} />
      <SnackbarProvider>
        <DndProvider backend={HTML5Backend}>
          <div className={styles.appWrapper}>
            <AppHeader />
            <div className={styles.app} ref={ref}>
              {!fullScreen && <ComponentsPanel className={styles.panel} />}
              <Configuration className={styles.configuration} />
              {!fullScreen && <ComponentSettings className={styles.settings} />}
            </div>
          </div>
        </DndProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
