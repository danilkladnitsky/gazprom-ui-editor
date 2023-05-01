import React from 'react';
import { Button } from '@mui/material';
import { useAppStore } from 'store/appStore';
import { useComponentsStore } from 'store/componentStore';

import { appService } from 'application';

export const GenerateForm = () => {
  const { setForm } = useAppStore();
  const { setComponents } = useComponentsStore();

  const handleClick = () => {
    const [components, form] = appService.generateForm();

    setComponents(components);
    setForm(form);

  };
  return (
    <Button onClick={handleClick}>Сгенерировать форму</Button>
  );
};
