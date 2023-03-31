import React from "react";

import { Skeleton } from "@mui/material";
import classNames from "classnames";

import { Droppable } from "../Droppable";
import styles from "./DropZone.module.scss";

type Props = {
  isHovered: boolean;
};

function DropZone({ isHovered }: Props) {
  return (
    <div
      className={classNames(styles.zone, { [styles.isHovered]: isHovered })}
    ></div>
  );
}

export default Droppable(DropZone);
