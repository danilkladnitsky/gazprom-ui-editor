import React from "react";

import { NumberInput } from "shared/ui/Configuration/Parameters/NumberInput";
import { DateInput } from "shared/ui/Configuration/Parameters/DateInput";
import { StringInput } from "shared/ui/Configuration/Parameters/StringInput";
import { Checkbox } from "shared/ui/Configuration/Parameters/Checkbox";
import { DatasourceComponent as DatasourceComponentProps } from "entities/component/domain";
import { ParameterType } from "entities/parameter/domain";

export const DatasourceComponent = (component: DatasourceComponentProps) => {
  const { dataSource } = component;
  const { type } = dataSource;

  switch (type) {
    case ParameterType.NUMBER:
      return <NumberInput element={dataSource} />;
    case ParameterType.DATE:
      return <DateInput element={dataSource} />;
    case ParameterType.CHECKBOX:
      return <Checkbox element={dataSource} />;
    default:
      return <StringInput element={dataSource} />;
  }
};
