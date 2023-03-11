import React from "react";

import { Button } from "@mui/material";

import {
  RestartAlt as RestartAltIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { UploadConfiguration } from "features/configuration/upload-configuration";
import { useAppConfigurationModel } from "entities/app-configuration";

type Props = {
  className?: string;
};

export const EditorActions = ({ className }: Props) => {
  const configuration = useAppConfigurationModel((state) => state.configuration);

  const configIsLoaded = Boolean(configuration);

  return (
    <div className={classNames(styles.actions, className)}>
      <Button startIcon={<RestartAltIcon />}>Сменить вид</Button>
      <Button startIcon={<DownloadIcon />} disabled={!configIsLoaded}>Скачать</Button>
      <UploadConfiguration />
    </div>
  );
};
