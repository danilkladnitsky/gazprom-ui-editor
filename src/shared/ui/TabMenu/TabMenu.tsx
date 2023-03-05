import React, { useState } from "react";

import { Tab, Tabs } from "@mui/material";

import styles from "./styles.module.scss";

export type TabValue = string | number;

export type TabItem = {
  value: TabValue;
  label: string;
};

type Props = {
  onChange: (value: TabValue) => void;
  tabs: TabItem[];
};

const TabMenu = ({ onChange, tabs }: Props) => {
  const [activeTab, setActiveTab] = useState<TabValue | null>(tabs[0].value);

  const handleOnChange = (event: React.SyntheticEvent, value: TabValue) => {
    setActiveTab(value);
    onChange(value);
  };

  return (
    <Tabs
      onChange={handleOnChange}
      className={styles.tabMenu}
      value={activeTab}
    >
      {tabs.map((tab) => (
        <Tab
          className={styles.tab}
          label={tab.label}
          value={tab.value}
          key={tab.value}
        />
      ))}
    </Tabs>
  );
};

export default TabMenu;
