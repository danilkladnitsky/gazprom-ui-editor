import { Component, useComponentModel } from "entities/component";
import { ElementComponent } from "features/render/component";
import React, { ReactNode } from "react";
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
  const { selectComponent } = useComponentModel();

  if (code !== "element") {
    const Wrapper = getComponentWrapper(code);
    return <Wrapper component={component}>{children}</Wrapper>;
  }

  const handleSelect = () => {
    selectComponent(code);
  };

  return <ElementComponent {...component} />;
}

function withWatching(Component: ReactNode, watch: () => void) {
  return (
    <div onClick={watch} className={styles.watchedComponent}>
      {Component}
    </div>
  );
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

export default TreeItem;
