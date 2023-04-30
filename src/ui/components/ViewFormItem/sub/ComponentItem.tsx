import React, { ComponentType } from 'react';
import { useComponentsStore } from 'store/componentStore';
import { HierarchyElement } from 'ui/components/HierarchyElement';

import { ELEMENT_TYPE, IComponent } from 'domain/component';

import { Form } from './Form';
import { Group } from './Group';
import { Page } from './Page';
import { Tab } from './Tab';
import { ViewFormItemProps } from './types';

export const ComponentItem = ({ item, children }
  : ViewFormItemProps<IComponent>) => {
  const { selectComponent } = useComponentsStore();

  const handleComponentPick = (component: IComponent) => {
    selectComponent(component.code);
  };

  const { type } = item;

  const ElementView = getElementByType(type) as
    ComponentType<ViewFormItemProps<IComponent>>;

  if (!ElementView) {
    return null;
  }

  return <ElementView onClick={handleComponentPick} item={item}>
    {children}
  </ElementView>
  ;
};

const getElementByType = <T extends ELEMENT_TYPE>(type: T) => {
  switch (type) {
  case ELEMENT_TYPE.ELEMENT:
    return HierarchyElement;
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
