import React, { useState } from 'react';
import { useComponentsStore } from 'store/componentStore';
import { TreeTemplateProps } from 'ui/components/TreeStructure';

import { ELEMENT_TYPE } from 'domain/component';
import { TreeItem } from 'domain/tree';

import { Element } from './sub/Element';
import { Form } from './sub/Form';
import { Group } from './sub/Group';
import { Page } from './sub/Page';
import { Tab } from './sub/Tab';

type Props = TreeTemplateProps<TreeItem>;

import styles from './HierarchyFormItem.module.scss';

export const HierarchyFormItem = ({ children, item, position }: Props) => {
  const { components } = useComponentsStore();
  const [expanded ] = useState(true);

  const currentComponent = components.find(c => c.code === item.code);

  if (!currentComponent) {
    return children;
  }

  const Item = getItem(currentComponent.type);

  return <Item element={currentComponent} dropPosition={position}>
    {<div className={styles.childrenItem}>
      {expanded ? children : '...'}
    </div>}
  </Item>;
};

const getItem = (type: ELEMENT_TYPE) => {
  switch (type) {
  case ELEMENT_TYPE.FORM:
    return Form;
  case ELEMENT_TYPE.GROUP:
    return Group;
  case ELEMENT_TYPE.PAGE:
    return Page;
  case ELEMENT_TYPE.TAB:
    return Tab;
  case ELEMENT_TYPE.ELEMENT:
  default:
    return Element;
  }
};
