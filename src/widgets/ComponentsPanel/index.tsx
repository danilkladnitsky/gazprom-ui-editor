import React, { useState } from "react";
import EditForm from "features/constructor/edit-form/ui";
import { SelectComponent } from "features/constructor/select-component";
import { ParametersList } from "ui/ParametersList";

import TabMenu, { TabItem } from "shared/ui/TabMenu/TabMenu";

import styles from "./styles.module.scss";

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
      return <ParametersList />;
    case TabValues.COMPONENTS:
      return <SelectComponent />;
    case TabValues.FORM:
    default:
      return <EditForm />;
  }
};

const ComponentsPanel = () => {
  const [selectedTab, setSelectedTab] = useState(navTabs[0].value);

  return (
    <div className={styles.panel}>
      <div className={styles.content}>
        <TabMenu
          tabs={navTabs}
          onChange={setSelectedTab}
          activeTab={selectedTab}
        />
        <TabContent tab={selectedTab} />
      </div>
    </div>
  );
};

export default ComponentsPanel;
