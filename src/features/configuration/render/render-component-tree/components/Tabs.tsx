import { Typography } from "@mui/material";
import React from "react";
import { ComponentProps } from "./types";

export const Tabs = ({ children, component }: ComponentProps) => {
  const { name } = component;
  return (
    <div>
      {name && <Typography variant="subtitle1">{name}</Typography>}
      {children}
    </div>
  );
};
