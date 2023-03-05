import { DEFAULT_PARAMETERS } from "entities/parameter";
import React from "react";
import { ParametersList } from "shared/ui/Parameter/ParametersList";
import TabMenu, { TabItem } from "shared/ui/TabMenu/TabMenu";

const navTabs: TabItem[] = [
  {
    label: "Параметры",
    value: "parameters",
  },
  {
    label: "Форма",
    value: "form",
  },
  {
    label: "Компоненты",
    value: "components",
  },
];

export const SelectComponent = () => {
  return (
    <div>
      <TabMenu tabs={navTabs} />
      <ParametersList list={DEFAULT_PARAMETERS} />
    </div>
  );
};
