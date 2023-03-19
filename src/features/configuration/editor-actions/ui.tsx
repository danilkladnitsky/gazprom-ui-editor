import React from "react";

import { Button } from "@mui/material";
import classNames from "classnames";

import {
  RestartAlt as RestartAltIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";

import { UploadConfiguration } from "features/configuration/upload-configuration";
import { useAppConfigurationModel } from "entities/app-configuration";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
};

export const EditorActions = ({ className }: Props) => {
  const { configuration, toggleView } = useAppConfigurationModel();

  const configIsLoaded = Boolean(configuration);

  return (
    <div className={classNames(styles.actions, className)}>
      <Button startIcon={<RestartAltIcon />} onClick={toggleView}>Сменить</Button>
      <Button startIcon={<DownloadIcon />} disabled={!configIsLoaded}>Скачать</Button>
      <UploadConfiguration />
    </div>
  );
};
