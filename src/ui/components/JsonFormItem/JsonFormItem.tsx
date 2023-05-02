import React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/ru';
import classNames from 'classnames';
import { useComponentsStore } from 'store/componentStore';
import { clearJson } from 'ui/utils/jsonReplacer';

import { IComponent } from 'domain/component';
import { TreeItem } from 'domain/tree';

import { TreeTemplateProps } from '../TreeStructure';

import styles from './JsonFormItem.module.scss';

const clearJsonConfig = (config: IComponent) => {
  return JSON.parse(JSON.stringify(config, clearJson(['code', 'items'])));
};

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

  const isSelected = selectedComponent?.code === item.code;

  return (
    <div className={styles.configWrapper}>
      <div onClick={handleSelect} className={classNames(styles.config, {
        [styles.activeConfig]: isSelected,
      })}>
        <JSONInput
          placeholder={clearJsonConfig(component)}
          style={{ labelColumn: { display: 'none' }, body: { backgroundColor: 'unset' } }}
          onKeyPressUpdate={true}
          confirmGood={false}
          onChange={handleComponentUpdate}
          locale={locale}
        />
      </div>
      <div className={styles.configChildren}>
        {children}
      </div>
    </div>
  );
};
