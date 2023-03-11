import React, { useState } from "react";

import styles from "./styles.module.scss";
import TabMenu, { TabItem } from "shared/ui/TabMenu/TabMenu";
import { SelectParameter } from "features/constructor/select-parameter";
import { SelectForm } from "features/constructor/select-form";
import { SelectComponent } from "features/constructor/select-component";

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
      return <SelectParameter />;
    case TabValues.COMPONENTS:
      return <SelectComponent />;
    case TabValues.FORM:
      return <SelectForm />;
    default:
      return <SelectParameter />;
  }
};

const ComponentsPanel = () => {
  const [selectedTab, setSelectedTab] = useState(navTabs[0].value);

  console.log(selectedTab);
  

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
