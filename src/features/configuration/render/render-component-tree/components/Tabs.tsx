import { SchemaTree } from "entities/app-configuration/domain";
import { useComponentModel } from "entities/component";
import { Component } from "entities/component/domain";
import React, { useState } from "react";
import TabMenu, { TabItem } from "shared/ui/TabMenu/TabMenu";
import { RecursiveTree } from "../model";
import { ComponentProps } from "./types";

import styles from "./Tabs.module.scss";

const convertToTabs = (
  items: SchemaTree[],
  components: Component[]
): TabItem<EntityId>[] => {
  return items.map((i, index) => ({
    label: components.find((c) => c.id === i.id)?.name || "Таб №" + index + 1,
    value: i.id,
  }));
};
export const Tabs = ({ children, subTree }: ComponentProps) => {
  const tabId = subTree.items ? subTree.items[0].id : null;

  const [visibleTabId, setVisibleTabId] = useState(tabId);
  const { components } = useComponentModel();

  if (!visibleTabId) {
    return children;
  }

  const handleTabChange = (id: EntityId) => {
    setVisibleTabId(id);
  };

  const visibleSubTree = subTree.items?.find((i) => i.id === visibleTabId);

  return (
    <div className={styles.tabs}>
      <TabMenu
        activeTab={visibleTabId}
        tabs={convertToTabs(subTree.items || [], components)}
        onChange={handleTabChange}
      />
      <div className={styles.tabContent}>
        <RecursiveTree tree={visibleSubTree} />
      </div>
    </div>
  );
};
