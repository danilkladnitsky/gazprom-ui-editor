import React from "react";

import { Skeleton } from "@mui/material";
import { withDropping, withDroppingProps } from "shared/hocs/withDropping";

import { SchemaTree } from "entities/app-configuration/domain";

import styles from "./DropTreeItemArea.module.scss";

const DropTreeItemArea = ({ isHovered }: withDroppingProps<SchemaTree>) => {
  if (isHovered) {
    return <Skeleton className={styles.dropArea} />;
  }

  return <div className={styles.dropAreaIdle}></div>;
};

export default withDropping(DropTreeItemArea, "app-form");
