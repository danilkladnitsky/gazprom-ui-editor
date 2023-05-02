import React from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material';

const Loader = (props: CircularProgressProps) => {
  return <CircularProgress {...props} color="secondary" />;
};

export default Loader;
