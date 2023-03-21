import { CircularProgress, CircularProgressProps } from "@mui/material";
import React from "react";

const Loader = (props: CircularProgressProps) => {
  return <CircularProgress {...props} color="secondary" />;
};

export default Loader;
