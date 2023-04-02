import React, { FC, ReactNode } from "react";

import { useComponentModel } from "entities/component";

import { Component } from "entities/component/domain";
import { TreeTemplateProps } from "features/configuration/render/render-component-tree";

import styles from "./withWatching.module.scss";

type WatchingHocProps = TreeTemplateProps;

export type WatchedComponentProps = {
  item: Component;
  children: ReactNode;
};

export function withWatching<Props extends WatchedComponentProps>(
  Component: FC<WatchingHocProps>
) {
  return function WatchedComponent(props: Props) {
    const { components } = useComponentModel();
    const component = components.find((c) => c.id === props.item.id);
    const selectComponent = useComponentModel((state) => state.selectComponent);

    if (!component) {
      return <Component {...props} />;
    }

    const { code, id } = component;

    if (code !== "element") {
      return <Component {...props} />;
    }

    const handleSelect = () => {
      selectComponent(id);
    };

    return (
      <div className={styles.watchedComponent} onClick={handleSelect}>
        <Component {...props} item={component} />
      </div>
    );
  };
}
