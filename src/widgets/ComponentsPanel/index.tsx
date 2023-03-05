import { EditorActions } from 'features/editor-actions';
import { SelectComponent } from 'features/select-component';

import styles from "./styles.module.scss";

const ComponentsPanel = () => {
  return (
    <div className={styles.panel}>
      <SelectComponent />
    </div>
  )
}

export default ComponentsPanel;