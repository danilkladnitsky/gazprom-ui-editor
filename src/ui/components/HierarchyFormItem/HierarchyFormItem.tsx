import React from 'react';
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

export const HierarchyFormItem = (props: Props) => {
  const components = useComponentsStore((state) => state.components);

  const { item, children } = props;

  const currentComponent = components.find(c => c.code === item.code);

  switch (currentComponent?.type) {
  case ELEMENT_TYPE.ELEMENT:
    return <Element element={currentComponent} />;
  case ELEMENT_TYPE.FORM:
    return <Form element={currentComponent}>
      {children}
    </Form>;
  case ELEMENT_TYPE.GROUP:
    return <Group element={currentComponent}>
      {children}
    </Group>;
  case ELEMENT_TYPE.PAGE:
    return <Page element={currentComponent}>
      {children}
    </Page>;
  case ELEMENT_TYPE.TAB:
    return <Tab element={currentComponent}>
      {children}
    </Tab>;
  }
};
