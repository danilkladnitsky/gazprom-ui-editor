import React, { ChangeEvent } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import {
  DeleteForever as DeleteIcon,
  Download as DownloadIcon,
  InsertPhoto,
  InsertPhoto as InsertPhotoIcon,
  RestartAlt as RestartAltIcon,
  Upload as UploadIcon } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import { useAppStore } from 'store/appStore';
import { useComponentsStore } from 'store/componentStore';
import { useParametersStore } from 'store/parameterStore';

import { ConfigReader } from 'app/config';

import { IForm } from 'domain/component';

import { appService } from 'application';

import { DeleteComponent } from '../DeleteComponent';

export const EditorActions = () => {
  const { form, uploadAppConfig, setForm, togglePreview, previewIsActive } = useAppStore();
  const { setComponents } = useComponentsStore();

  const [ref] = useAutoAnimate();

  const parameters = useParametersStore(state => state.parameters);

  const toggleEditorMode = useAppStore(state => state.toggleEditorMode);

  const handleDownload = () => {
    appService.downloadConfig();
  };

  const handleUpload = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target?.files?.[0];
    if (!file) {
      return;
    }

    const config = await ConfigReader.read<[IForm]>(target?.files?.[0] as File);
    const [components] = uploadAppConfig(config[0]);

    setComponents(components);
  };

  const clearForm = () => {
    setForm(null);
  };

  const canChangeView = Boolean(form);
  const candownloadView = Boolean(form);
  const canUploadView = Boolean(form) || Boolean(parameters.length);

  return (
    <Stack direction={'row'} spacing={2} ref={ref}>
      <DeleteComponent />
      <Button
        startIcon={<RestartAltIcon />}
        disabled={!canChangeView}
        onClick={toggleEditorMode}
      >
        Сменить вид
      </Button>
      <Button startIcon={<DownloadIcon />}
        disabled={!candownloadView}
        onClick={handleDownload}
      >
        Скачать конфигурацию
      </Button>
      <Button
        startIcon={<UploadIcon />}
        disabled={!canUploadView}
        component="label"
      >
        <input hidden accept="json/*" type="file" onChange={handleUpload} />
        Загрузить конфигурацию
      </Button>
      <Button
        startIcon={<DeleteIcon />}
        disabled={!candownloadView}
        component="label"
        onClick={clearForm}
      >
        Очистить форму
      </Button>
      <Button
        startIcon={<InsertPhoto />}
        disabled={!canChangeView}
        onClick={togglePreview}
      >
        Превью
      </Button>
    </Stack>
  );
};
