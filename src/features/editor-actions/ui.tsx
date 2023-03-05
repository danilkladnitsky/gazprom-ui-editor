import React from "react";

import { Button } from "@mui/material";

import {
  RestartAlt as RestartAltIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
} from "@mui/icons-material";

import styles from "./styles.module.scss";
import classNames from "classnames";

type Props = {
  className?: string;
};

export const EditorActions = ({ className }: Props) => {
  return (
    <div className={classNames(styles.actions, className)}>
      <Button startIcon={<RestartAltIcon />}>Сменить вид</Button>
      <Button startIcon={<DownloadIcon />}>Скачать</Button>
      <Button startIcon={<UploadIcon />}>Загрузить</Button>
    </div>
  );
};
