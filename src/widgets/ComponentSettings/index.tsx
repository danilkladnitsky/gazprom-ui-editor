import { EditComponent } from "features/component/edit-component";

import styles from "./styles.module.scss";

const ComponentSettings = () => {
  return (
    <div className={styles.settings}>
      <EditComponent />
    </div>
  );
};

export default ComponentSettings;
