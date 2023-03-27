import { useComponentModel } from "entities/component";
import { Component } from "entities/component/domain";
import { DatasourceComponent } from "features/render/component";
import React, { FC, ReactNode } from "react";
import { Form } from "./Form";
import { Group } from "./Group";
import Page from "./Page";
import { Tabs } from "./Tabs";

import styles from "./TreeItem.module.scss";

type Props = {
  component: Component;
  children: ReactNode;
};

function TreeItem({ component, children }: Props) {
  const { code } = component;

  if (code !== "element") {
    const Wrapper = getComponentWrapper(code);
    return <Wrapper component={component}>{children}</Wrapper>;
  }

  return <DatasourceComponent {...component} />;
}

function withWatching(Component: FC<Props>) {
  return function WatchedComponent(props: Props) {
    const {
      component: { code },
    } = props;

    const { selectComponent } = useComponentModel();

    const handleSelect = () => {
      selectComponent(props.component.id);
    };

    return code === "element" ? (
      <div className={styles.watchedComponent} onClick={handleSelect}>
        <Component {...props} />
      </div>
    ) : (
      <Component {...props} />
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
