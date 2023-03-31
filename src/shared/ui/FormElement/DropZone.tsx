import React from "react";

import { Skeleton } from "@mui/material";

import { Droppable } from "../Droppable";
import styles from "./DropZone.module.scss";

type Props = {
  isHovered: boolean;
};

function DropZone({ isHovered }: Props) {
  if (isHovered) {
    return <Skeleton className={styles.isHovered} animation="pulse" />;
  }

  return <div className={styles.zone}></div>;
}

export default Droppable(DropZone);
