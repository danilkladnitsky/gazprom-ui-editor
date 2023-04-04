import React from "react";

import { Skeleton } from "@mui/material";
import { withDropping, withDroppingProps } from "shared/hocs/withDropping";

import { SchemaTree } from "entities/app-configuration/domain";

import styles from "./DropTreeItemArea.module.scss";
import { useComponent } from "shared/hooks/useComponent";
import { DatasourceComponent as ComponentType } from "entities/component/domain";
import { DatasourceComponent } from "features/render/component";

const DropTreeItemArea = ({
  isHovered,
  droppingItem,
}: withDroppingProps<SchemaTree>) => {
  const shouldRenderPreview = droppingItem?.alias === "component-list";
  const component = useComponent<ComponentType>(droppingItem?.item.id);

  if (shouldRenderPreview && isHovered && component) {
    return (
      <div className={styles.preview}>
        <DatasourceComponent {...component} />
      </div>
    );
  }
  if (isHovered) {
    return <Skeleton className={styles.dropArea} />;
  }

  return <div className={styles.dropAreaIdle}></div>;
};

export default withDropping(DropTreeItemArea, ["app-form", "component-list"]);
