import React, { useState } from "react";

import styles from "./styles.module.scss";
import TabMenu, { TabItem } from "shared/ui/TabMenu/TabMenu";
import { SelectParameter } from "features/select-parameter";

enum TabValues {
  PARAMETERS,
  FORM,
  COMPONENTS,
}

const navTabs: TabItem<TabValues>[] = [
  {
    label: "Параметры",
    value: TabValues.PARAMETERS,
  },
  {
    label: "Форма",
    value: TabValues.FORM,
  },
  {
    label: "Компоненты",
    value: TabValues.COMPONENTS,
  },
];

const TabContent = ({ tab }: { tab: TabValues }) => {
  switch (tab) {
    case TabValues.PARAMETERS:
    case TabValues.COMPONENTS:
    case TabValues.FORM:
    default:
      return <SelectParameter />;
  }
};

const ComponentsPanel = () => {
  const [selectedTab, setSelectedTab] = useState(navTabs[0].value);

  return (
    <div className={styles.panel}>
      <TabMenu
        tabs={navTabs}
        onChange={setSelectedTab}
        activeTab={selectedTab}
      />
      <TabContent tab={selectedTab} />
    </div>
  );
};

export default ComponentsPanel;
