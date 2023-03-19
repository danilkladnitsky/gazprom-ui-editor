import React from 'react'

import { Button } from '@mui/material';
import { Upload as UploadIcon } from "@mui/icons-material";

const UploadParameters = () => {
  return (
    <Button startIcon={<UploadIcon />}>Загрузить параметры</Button>
  )
}

export default UploadParameters;