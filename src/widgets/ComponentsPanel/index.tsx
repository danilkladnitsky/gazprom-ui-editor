import React, { useState } from 'react';
import { useParametersStore } from 'store/parameterStore';
import { ComponentsList } from 'ui/components/ComponentsList';
import GuiForm from 'ui/components/GuiForm/GuiForm';
import { HierarchyForm } from 'ui/components/HierarchyForm';
import { HierarchyFormItem } from 'ui/components/HierarchyFormItem';
import { ParametersList } from 'ui/components/ParametersList';
import { UploadParameters } from 'ui/components/UploadParameters';

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
    label: 'Форма',
    value: TabValues.FORM,
  },
  {
    label: 'Компоненты',
    value: TabValues.COMPONENTS,
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
    return <HierarchyForm template={HierarchyFormItem} />;
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
