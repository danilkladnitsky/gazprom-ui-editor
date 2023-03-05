import { EditFormConfiguration } from "features/edit-form-configuration";
import { EditorActions } from "features/editor-actions";
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
