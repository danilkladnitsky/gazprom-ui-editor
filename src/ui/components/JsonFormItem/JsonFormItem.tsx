import React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import { useComponentsStore } from 'store/componentStore';

import { IComponent } from 'domain/component';
import { TreeItem } from 'domain/tree';

import { TreeTemplateProps } from '../TreeStructure';

export const JsonFormItem = ({ item, children }: TreeTemplateProps<TreeItem>) => {
  const {
    components,
    selectedComponent,
    updateSelectedComponent,
    selectComponent,
  } = useComponentsStore();

  const component = components.find(c => c.code === item.code);

  if (!component) {
    return children;
  }

  const handleComponentUpdate = ({
    jsObject,
  }: {
    jsObject: IComponent | undefined;
  }) => {
    if (!jsObject || !selectedComponent) {
      return;
    }

    updateSelectedComponent({ ...jsObject });
  };

  const handleSelect = () => {
    selectComponent(item.code);
  };

  return (
    <div>
      <div onClick={handleSelect}>
        <JSONInput
          placeholder={component}
          style={{ labelColumn: { display: 'none' } }}
          onKeyPressUpdate={true}
          onChange={handleComponentUpdate}
        />
      </div>
      {children}
    </div>
  );
};
