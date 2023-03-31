import { SchemaTree } from "entities/app-configuration/domain";
import { useComponentModel } from "entities/component";
import { DatasourceComponent } from "features/render/component";
import React, { FC, ReactNode } from "react";
import { Form } from "./Form";
import { Group } from "./Group";
import Page from "./Page";
import { Tabs } from "./Tabs";

import styles from "./TreeItem.module.scss";

type Props = {
  item: SchemaTree;
  children: ReactNode;
};

function TreeItem({ item, children }: Props) {
  const { components } = useComponentModel();
  const component = components.find((c) => c.id === item.id);

  if (!component) {
    throw new Error(`Компонента с id ${item.id} не существует`);
  }

  const { code } = component;

  if (code !== "element") {
    const Wrapper = getComponentWrapper(code);
    return <Wrapper component={component}>{children}</Wrapper>;
  }

  return <DatasourceComponent {...component} />;
}

function withWatching(Component: FC<Props>) {
  return function WatchedComponent(props: Props) {
    const { components } = useComponentModel();
    const component = components.find((c) => c.id === props.item.id);

    if (!component) {
      return <Component {...props} />;
    }

    const { code, id } = component;

    const selectComponent = useComponentModel((state) => state.selectComponent);

    if (code !== "element") {
      return <Component {...props} />;
    }

    const handleSelect = () => {
      selectComponent(id);
    };

    return (
      <div className={styles.watchedComponent} onClick={handleSelect}>
        <Component {...props} />
      </div>
    );
  };
}

function getComponentWrapper(code: ComponentCode) {
  switch (code) {
    case "form":
      return Form;
    case "tabs":
      return Tabs;
    case "page":
      return Page;
    case "group":
    default:
      return Group;
  }
}

export default withWatching(TreeItem);
