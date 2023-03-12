import React from "react";

import { EditFormConfiguration } from "features/configuration/edit-form-configuration";
import { EditorActions } from "features/configuration/editor-actions";
import styles from "./styles.module.scss";

const ViewConfiguration = () => {
  return (
    <div className={styles.configuration}>
      <EditFormConfiguration />
      <EditorActions className={styles.actions} />
    </div>
  );
};

export default ViewConfiguration;
