import React from "react";

import { EditComponent } from "features/component/edit-component";

import styles from "./styles.module.scss";
import { useComponentModel } from "entities/component";

const ComponentSettings = () => {
  const { selectedComponent } = useComponentModel();

  return (
    <div className={styles.settings}>
      {selectedComponent && <EditComponent />}
    </div>
  );
};

export default ComponentSettings;
