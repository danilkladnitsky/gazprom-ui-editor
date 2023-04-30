import {
  Article,
  CalendarToday,
  CheckBox,
  Description,
  Menu,
  Notes,
  Numbers,
  ShortText,
  WebAsset,
} from '@mui/icons-material';

import { ELEMENT_TYPE, IComponent, IElement } from 'domain/component';
import { CONTROL_TYPE } from 'domain/parameter';

export const getComponentIcon = (component: IComponent) => {
  switch (component.type) {
  case ELEMENT_TYPE.FORM:
    return WebAsset;
  case ELEMENT_TYPE.TAB:
    return Menu;
  case ELEMENT_TYPE.GROUP:
    return Article;
  case ELEMENT_TYPE.PAGE:
    return Description;
  case ELEMENT_TYPE.ELEMENT:
  default:
    return getElementIcon(component);
  }
};

const getElementIcon = (element: IElement) => {
  switch (element.as) {
  case CONTROL_TYPE.CHECKBOX:
    return CheckBox;
  case CONTROL_TYPE.DATE:
  case CONTROL_TYPE.DATEPICKER:
    return CalendarToday;
  case CONTROL_TYPE.NUMBER:
    return Numbers;
  case CONTROL_TYPE.TEXTAREA:
    return Notes;
  default:
    return ShortText;
  }
};
