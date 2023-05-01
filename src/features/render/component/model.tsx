import React from 'react';
import { DatasourceComponent as DatasourceComponentProps } from 'entities/component/domain';
import { ParameterType } from 'entities/parameter/domain';

import { DATASOURCE_TYPE } from 'domain/parameter';

import {
  Checkbox,
  DateInput,
  File,
  NumberInput,
  StringInput,
  TextArea,
} from 'shared/ui/Configuration/Parameters';

export const DatasourceComponent = (component: DatasourceComponentProps) => {
  const { dataSource, name } = component;
  const { type } = dataSource;

  switch (type) {
  case DATASOURCE_TYPE.NUMBER:
    return <NumberInput name={name} />;
  case DATASOURCE_TYPE.DATEPICKER:
    return <DateInput name={name} />;
  case DATASOURCE_TYPE.CHECKBOX:
    return <Checkbox name={name} />;
  case DATASOURCE_TYPE.FILE:
    return <File element={dataSource} name={name} />;
  case DATASOURCE_TYPE.TEXTAREA:
    return <TextArea element={dataSource} name={name} />;
  default:
    return <StringInput element={dataSource} name={name} />;
  }
};
