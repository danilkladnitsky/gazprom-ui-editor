import React from "react";

import { Button } from "@mui/material";
import { withDragging, withDraggingProps } from "shared/hocs/withDragging";
import { useComponent } from "shared/hooks/useComponent";
import { ListItemProps } from "../List";
import { TimeAgo } from "../TimeAgo";

function ComponentElement({ item }: ListItemProps & withDraggingProps) {
  const component = useComponent(item.id);

  if (!component) {
    return null;
  }

  return (
    <Button endIcon={<TimeAgo date={component.timestamp} />}>
      {item.name}
    </Button>
  );
}

export default withDragging(ComponentElement, "component-list");
