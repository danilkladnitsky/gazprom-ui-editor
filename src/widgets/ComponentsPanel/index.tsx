import TabMenu from 'shared/ui/TabMenu/TabMenu';

import styles from "./styles.module.scss";

const ComponentsPanel = () => {
  return (
    <div className={styles.panel}>
      <TabMenu />
    </div>
  )
}

export default ComponentsPanel;