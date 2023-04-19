import React from "react";
import JSONInput from "react-json-editor-ajrm";

import { extractJsonBody } from "entities/app-configuration/utils";
import { TreeTemplateProps } from "features/configuration/render/render-component-tree";
import { useComponent } from "shared/hooks/useComponent";

import styles from "./styles.module.scss";
import { useComponentModel } from "entities/component";
import classNames from "classnames";
import { Component } from "entities/component/domain";

type Props = TreeTemplateProps;

export default function JsonElement({ item, children }: Props) {
  const component = useComponent(item.id);
  const { selectComponent, updateSelectedComponent, selectedComponent } =
    useComponentModel();

  if (!component) {
    return null;
  }

  const json = extractJsonBody(component);

  const canBeEdited =
    component.code === "element" || component.code === "group";
  const isSelected = selectedComponent?.id === item.id;

  const handleSelect = (e) => {
    e.stopPropagation();
    selectComponent(item.id);
  };

  const handleComponentUpdate = ({
    jsObject,
  }: {
    jsObject: Component | undefined;
  }) => {
    if (!jsObject || !selectedComponent) {
      return;
    }

    updateSelectedComponent({ ...jsObject, id: selectedComponent.id });
  };

  const selectedClassname =
    Boolean(selectedComponent) &&
    (isSelected ? styles.isSelected : styles.notSelected);

  const showValidation = isSelected && Boolean(selectedComponent);

  return (
    <div className={styles.jsonWrapper}>
      <div
        className={classNames(styles.jsonInput, selectedClassname)}
        onClick={canBeEdited && handleSelect}
      >
        <JSONInput
          placeholder={JSON.parse(json)}
          style={{ labelColumn: { display: "none" } }}
          confirmGood={showValidation}
          onKeyPressUpdate={true}
          viewOnly={!isSelected}
          onChange={handleComponentUpdate}
        />
      </div>
      <div className={styles.childrenInput}>{children}</div>
    </div>
  );
}
