import React from "react";

import { NumberInput } from "shared/ui/Configuration/Parameters/NumberInput";
import { DateInput } from "shared/ui/Configuration/Parameters/DateInput";
import { StringInput } from "shared/ui/Configuration/Parameters/StringInput";
import { Checkbox } from "shared/ui/Configuration/Parameters/Checkbox";
import { DatasourceComponent as DatasourceComponentProps } from "entities/component/domain";
import { ParameterType } from "entities/parameter/domain";

export const DatasourceComponent = (component: DatasourceComponentProps) => {
  const { dataSource, name } = component;
  const { type } = dataSource;

  switch (type) {
    case ParameterType.NUMBER:
      return <NumberInput element={dataSource} name={name} />;
    case ParameterType.DATE:
      return <DateInput element={dataSource} name={name} />;
    case ParameterType.CHECKBOX:
      return <Checkbox element={dataSource} name={name} />;
    default:
      return <StringInput element={dataSource} name={name} />;
  }
};
