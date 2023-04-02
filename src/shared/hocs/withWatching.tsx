import React, { FC } from "react";

import { useComponentModel } from "entities/component";

import { TreeTemplateProps } from "features/configuration/render/render-component-tree";

import styles from "./withWatching.module.scss";
import { useComponent } from "shared/hooks/useComponent";

export function withWatching<Props extends TreeTemplateProps>(
  Component: FC<Props>
) {
  return function WatchedComponent(props: Props) {
    const component = useComponent(props.item.id);

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
        <Component {...props} />
      </div>
    );
  };
}
