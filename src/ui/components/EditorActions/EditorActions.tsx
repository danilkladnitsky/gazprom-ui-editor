import React from 'react';
import {
  Download as DownloadIcon,
  RestartAlt as RestartAltIcon,
  Upload as UploadIcon,
} from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import { useAppStore } from 'store/appStore';

import { appService } from 'application';

export const EditorActions = () => {
  const form = useAppStore(state => state.form);
  const toggleEditorMode = useAppStore(state => state.toggleEditorMode);

  const handleDownload = () => {
    appService.downloadConfig();
  };

  const editorButtonsActive = Boolean(form);

  return (
    <Stack direction={'row'} spacing={2}>
      <Button
        startIcon={<RestartAltIcon />}
        disabled={!editorButtonsActive}
        onClick={toggleEditorMode}
      >Сменить вид</Button>
      <Button startIcon={<DownloadIcon />}
        disabled={!editorButtonsActive}
        onClick={handleDownload}
      >Скачать конфигурацию</Button>
      <Button
        startIcon={<UploadIcon />}
        disabled={!editorButtonsActive}
      >Загрузить конфигурацию</Button>
    </Stack>
  );
};
