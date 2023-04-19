import React from "react";

import { Button } from "@mui/material";
import classNames from "classnames";

import {
  RestartAlt as RestartAltIcon,
  Download as DownloadIcon,
  PanTool,
} from "@mui/icons-material";

import { UploadConfiguration } from "features/configuration/actions/upload-configuration";
import { useAppConfigurationModel } from "entities/app-configuration";

import styles from "./styles.module.scss";
import ResetForm from "../reset-form/ui";

type Props = {
  className?: string;
};

export const EditorActions = ({ className }: Props) => {
  const { configuration, toggleView, downloadConfiguration } =
    useAppConfigurationModel();

  const configIsLoaded = Boolean(configuration);

  return (
    <div className={classNames(styles.actions, className)}>
      <Button
        startIcon={<RestartAltIcon />}
        disabled={!configIsLoaded}
        onClick={toggleView}
      >
        Сменить вид
      </Button>
      <Button
        startIcon={<DownloadIcon />}
        disabled={!configIsLoaded}
        onClick={downloadConfiguration}
      >
        Скачать конфигурацию
      </Button>
      {/* <UploadConfiguration /> */}
      <ResetForm />
    </div>
  );
};
