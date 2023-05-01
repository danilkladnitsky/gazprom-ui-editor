import React from 'react';

import { IElement } from 'domain/component';
import { CONTROL_TYPE } from 'domain/parameter';

import { ViewFormItemProps } from '../ViewFormItem/sub/types';

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

export const HierarchyElement = ({ item, onClick }
  : ViewFormItemProps<IElement>) => {

  const { as } = item;

  const handleComponentPick = () => {
    onClick?.(item);
  };

  const ParameterElement = getParameterByType(as);

  return <div onClick={handleComponentPick}>
    <ParameterElement element={item} />
  </div>;
};

const getParameterByType = (type: CONTROL_TYPE) => {
  switch (type) {
  case CONTROL_TYPE.CHECKBOX:
    return Checkbox;
  case CONTROL_TYPE.COMBOBOX:
    return Combobox;
  case CONTROL_TYPE.DATE:
    return Date;
  case CONTROL_TYPE.DATEPICKER:
    return DatePicker;
  case CONTROL_TYPE.FILE:
    return File;
  case CONTROL_TYPE.LINK:
    return Link;
  case CONTROL_TYPE.NUMBER:
    return Number;
  case CONTROL_TYPE.RADIOGROUP:
    return Radiogroup;
  case CONTROL_TYPE.SELECT:
    return Select;
  case CONTROL_TYPE.SWITCH:
    return Switch;
  case CONTROL_TYPE.TEXTAREA:
    return TextArea;
  case CONTROL_TYPE.TEXT:
  default:
    return Text;
  }
};
