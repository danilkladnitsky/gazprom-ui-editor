import { EditFormConfiguration } from "features/edit-form-configuration";
import styles from "./styles.module.scss";


const ViewConfiguration = () => {
  return (
    <div className={styles.configuration}>
      <EditFormConfiguration />
    </div>
  )
}

export default ViewConfiguration;