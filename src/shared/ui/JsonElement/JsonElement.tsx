import React from "react";
import JSONInput from "react-json-editor-ajrm";

import { extractJsonBody } from "entities/app-configuration/utils";
import { TreeTemplateProps } from "features/configuration/render/render-component-tree";
import { useComponent } from "shared/hooks/useComponent";

import styles from "./styles.module.scss";
import { useComponentModel } from "entities/component";
import classNames from "classnames";

type Props = TreeTemplateProps;

export default function JsonElement({ item, children }: Props) {
  const component = useComponent(item.id);
  const { selectComponent, selectedComponent } = useComponentModel();

  if (!component) {
    return null;
  }

  const json = extractJsonBody(component);

  const isElement = component.code === "element";
  const isSelected = selectedComponent?.id === item.id;

  const handleSelect = (e) => {
    e.stopPropagation();
    selectComponent(item.id);
  };

  const selectedClassname =
    Boolean(selectedComponent) &&
    (isSelected ? styles.isSelected : styles.notSelected);

  return (
    <div className={styles.jsonWrapper}>
      <div
        className={classNames(styles.jsonInput, selectedClassname)}
        onClick={isElement && handleSelect}
      >
        <JSONInput
          placeholder={JSON.parse(json)}
          style={{ labelColumn: { display: "none" } }}
          confirmGood={false}
          height={0}
        />
      </div>
      <div className={styles.childrenInput}>{children}</div>
    </div>
  );
}
