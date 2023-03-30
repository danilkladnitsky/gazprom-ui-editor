import React from "react";

import { ComponentTree } from "entities/app-configuration/domain";

import TreeItem from "./components/TreeItem";

export function renderRecursiveTree(tree: ComponentTree) {
  const renderSubTree = (subTree: ComponentTree) => {
    return (
      subTree.items &&
      subTree.items.map((component) => (
        <TreeItem item={component} key={component.id}>
          {renderSubTree(component)}
        </TreeItem>
      ))
    );
  };

  const preparedTree = {
    items: [tree],
  };

  return renderSubTree(preparedTree);
}
