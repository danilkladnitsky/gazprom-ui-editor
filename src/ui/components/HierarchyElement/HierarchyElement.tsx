import React from 'react';
import classNames from 'classnames';

import { IElement } from 'domain/component';
import { CONTROL_TYPE } from 'domain/parameter';

import { ViewFormItemProps } from '../GuiFormItem/sub/types';

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

import styles from './HierarchyElement.module.scss';

export const HierarchyElement = ({ item, onClick }
  : ViewFormItemProps<IElement>) => {
  const { as, properties } = item;

  const handleComponentPick = () => {
    onClick?.(item);
  };

  const ParameterElement = getParameterByType(as);

  return <div onClick={handleComponentPick}
    className={classNames(styles.element,
      { [styles.hidden]: properties?.hidden === true })}
  >
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
