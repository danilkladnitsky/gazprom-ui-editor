import { Button } from "@mui/material";
import React from "react";
import { withDragging, withDraggingProps } from "shared/hocs/withDragging";
import { ListItemProps } from "../List";

function ComponentElement({ item }: ListItemProps & withDraggingProps) {
  return <Button>{item.name}</Button>;
}

export default withDragging(ComponentElement, "component-list");
