import React from "react";

import { DatasourceComponent as DatasourceComponentProps } from "entities/component/domain";
import { ParameterType } from "entities/parameter/domain";
import {
  DateInput,
  NumberInput,
  StringInput,
  Checkbox,
  File,
  TextArea,
} from "shared/ui/Configuration/Parameters";

export const DatasourceComponent = (component: DatasourceComponentProps) => {
  const { dataSource, name } = component;
  const { type } = dataSource;

  switch (type) {
    case ParameterType.NUMBER:
      return <NumberInput element={dataSource} name={name} />;
    case ParameterType.DATEPICKER:
      return <DateInput element={dataSource} name={name} />;
    case ParameterType.CHECKBOX:
      return <Checkbox element={dataSource} name={name} />;
    case ParameterType.FILE:
      return <File element={dataSource} name={name} />;
    case ParameterType.TEXTAREA:
      return <TextArea element={dataSource} name={name} />;
    default:
      return <StringInput element={dataSource} name={name} />;
  }
};
