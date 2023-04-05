import React from "react";
import { withDragging, withDraggingProps } from "shared/hocs/withDragging";
import { ListItemProps } from "../List";

function ComponentElement({ item }: ListItemProps & withDraggingProps) {
  return <div>{item.name}</div>;
}

export default withDragging(ComponentElement, "component-list");
