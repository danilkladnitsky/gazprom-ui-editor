import { DeleteForever } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useAppConfigurationModel } from 'entities/app-configuration';
import React from 'react'

const ResetForm = () => {
    const {
    configuration,
  } = useAppConfigurationModel();

    const configIsLoaded = Boolean(configuration);

    const reset = () => {
        localStorage.clear();
        window.location.reload();
    }

  return (
    <Button
        startIcon={<DeleteForever />}
        onClick={reset}
        disabled={!configIsLoaded}
      >
        Сбросить форму
      </Button>
  )
}

export default ResetForm;