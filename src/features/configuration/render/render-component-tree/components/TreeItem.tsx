import React from "react";

import { WatchedComponentProps, withWatching } from "shared/hocs";

import { DatasourceComponent } from "features/render/component";

import { Form } from "./Form";
import { Group } from "./Group";
import Page from "./Page";
import { Tabs } from "./Tabs";

type Props = WatchedComponentProps;

function TreeItem({ item: component, children }: Props) {
  const { code } = component;

  if (code !== "element") {
    const Wrapper = getComponentWrapper(code);
    return <Wrapper component={component}>{children}</Wrapper>;
  }

  return <DatasourceComponent {...component} />;
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
