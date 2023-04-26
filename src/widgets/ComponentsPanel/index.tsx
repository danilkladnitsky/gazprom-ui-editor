import React, { useState } from 'react';
import { useParametersStore } from 'store/parameterStore';
import { ComponentsList } from 'ui/ComponentsList';
import { HierarchyForm } from 'ui/HierarchyForm';
import { ParametersList } from 'ui/ParametersList';
import { UploadParameters } from 'ui/UploadParameters';

import TabMenu, { TabItem } from 'shared/ui/TabMenu/TabMenu';

import styles from './styles.module.scss';

enum TabValues {
  PARAMETERS,
  FORM,
  COMPONENTS,
}

const navTabs: TabItem<TabValues>[] = [
  {
    label: 'Параметры',
    value: TabValues.PARAMETERS,
  },
  {
    label: 'Компоненты',
    value: TabValues.COMPONENTS,
  },
  {
    label: 'Форма',
    value: TabValues.FORM,
  },
];

const TabContent = ({ tab }: { tab: TabValues }) => {
  switch (tab) {
  case TabValues.PARAMETERS:
    return <ParametersList />;
  case TabValues.COMPONENTS:
    return <ComponentsList />;
  case TabValues.FORM:
  default:
    return <HierarchyForm />;
  }
};

const ComponentsPanel = () => {
  const [selectedTab, setSelectedTab] = useState(navTabs[0].value);
  const { parameters } = useParametersStore();

  const hasParameters = Boolean(parameters.length);

  return (
    <div className={styles.panel}>
      <div className={styles.content}>
        <TabMenu
          tabs={navTabs}
          onChange={setSelectedTab}
          activeTab={selectedTab}
        />
        {hasParameters ? (
          <TabContent tab={selectedTab} />
        ) : (
          <UploadParameters />
        )}
      </div>
    </div>
  );
};

export default ComponentsPanel;
