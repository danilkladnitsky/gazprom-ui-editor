import React, { ComponentType } from 'react';

import { ELEMENT_TYPE, IComponent } from 'domain/component';

import { Element } from './Element';
import { Form } from './Form';
import { Group } from './Group';
import { Page } from './Page';
import { Tab } from './Tab';
import { ViewFormItemProps } from './types';

export const ComponentItem = ({ item, children }
  : ViewFormItemProps<IComponent>) => {
  const { type } = item;

  const ElementView = getElementByType(type) as
    ComponentType<ViewFormItemProps<IComponent>>;

  if (!ElementView) {
    return null;
  }

  return <ElementView item={item}>
    {children}
  </ElementView>;
};

const getElementByType = <T extends ELEMENT_TYPE>(type: T) => {
  switch (type) {
  case ELEMENT_TYPE.ELEMENT:
    return Element;
  case ELEMENT_TYPE.GROUP:
    return Group;
  case ELEMENT_TYPE.TAB:
    return Tab;
  case ELEMENT_TYPE.PAGE:
    return Page;
  case ELEMENT_TYPE.FORM:
    return Form;
  default:
    return null;
  }
};
