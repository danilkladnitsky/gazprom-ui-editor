import React from "react";

import { Tab, Tabs } from "@mui/material";

import styles from "./styles.module.scss";

export type TabItem<V> = {
  value: V;
  label: string;
  disabled?: boolean;
};

type Props<V> = {
  onChange: (value: V) => void;
  tabs: TabItem<V>[];
  activeTab: V;
};

const TabMenu = <V,>({ onChange, tabs, activeTab }: Props<V>) => {
  const handleOnChange = (event: React.SyntheticEvent, value: V) => {
    onChange(value);
  };

  return (
    <Tabs
      onChange={handleOnChange}
      className={styles.tabMenu}
      value={activeTab}
    >
      {tabs.map((tab, key) => (
        <Tab
          className={styles.tab}
          label={tab.label}
          value={tab.value}
          disabled={tab.disabled}
          key={key}
        />
      ))}
    </Tabs>
  );
};

export default TabMenu;
