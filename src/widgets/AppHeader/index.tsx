import React from "react";

import { EditorActions } from "features/configuration/actions/editor-actions";

import styles from "./styles.module.scss";

export const AppHeader = () => {
  return (
    <div className={styles.header}>
      <EditorActions />
    </div>
  );
};
