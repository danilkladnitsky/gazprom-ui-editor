import React from 'react';

import { IElement } from 'domain/component';
import { DATASOURCE_TYPE } from 'domain/parameter';

import {
  Checkbox,
  Combobox,
  Date,
  DatePicker,
  File,
  Link,
  Number,
  Radiogroup,
  Select,
  Switch,
  Text,
  TextArea,
} from './sub';

type Props = {
    element: IElement;
};

export const HierarchyElement = ({ element }: Props) => {
  const { dataSource } = element;
  const { type } = dataSource;

  switch (type) {
  case DATASOURCE_TYPE.CHECKBOX:
    return <Checkbox element={dataSource} />;
  case DATASOURCE_TYPE.COMBOBOX:
    return <Combobox element={dataSource} />;
  case DATASOURCE_TYPE.DATE:
    return <Date element={dataSource} />;
  case DATASOURCE_TYPE.DATEPICKER:
    return <DatePicker element={dataSource} />;
  case DATASOURCE_TYPE.FILE:
    return <File element={dataSource} />;
  case DATASOURCE_TYPE.LINK:
    return <Link element={dataSource} />;
  case DATASOURCE_TYPE.NUMBER:
    return <Number element={dataSource} />;
  case DATASOURCE_TYPE.RADIOGROUP:
    return <Radiogroup element={dataSource} />;
  case DATASOURCE_TYPE.SELECT:
    return <Select element={dataSource} />;
  case DATASOURCE_TYPE.SWITCH:
    return <Switch element={dataSource} />;
  case DATASOURCE_TYPE.TEXTAREA:
    return <TextArea element={dataSource} />;
  case DATASOURCE_TYPE.TEXT:
  default:
    return <Text element={dataSource} />;
  }
};
