import React from 'react';
import {
  Download as DownloadIcon,
  RestartAlt as RestartAltIcon,
  Upload as UploadIcon,
} from '@mui/icons-material';
import { Button, Stack } from '@mui/material';

import { appService } from 'application';

export const EditorActions = () => {
  const handleDownload = () => {
    appService.downloadConfig();
  };

  return (
    <Stack direction={'row'} spacing={2}>
      <Button startIcon={<RestartAltIcon />}>Сменить вид</Button>
      <Button startIcon={<DownloadIcon />} onClick={handleDownload}>Скачать конфигурацию</Button>
      <Button startIcon={<UploadIcon />}>Загрузить конфигурацию</Button>
    </Stack>
  );
};
