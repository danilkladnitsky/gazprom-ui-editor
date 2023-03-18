import React from "react";

import { ComponentTree } from "entities/component";

import { TreeItem } from "./components/TreeItem";

export function renderRecursiveTree(tree: ComponentTree) {
  const renderSubTree = (subTree: ComponentTree) => {
    return (
      subTree.items &&
      subTree.items.map((component) => (
        <TreeItem component={component} key={component.name}>
          {renderSubTree(component)}
        </TreeItem>
      ))
    );
  };

  const preparedTree = {
    items: [tree]
  }

  return renderSubTree(preparedTree);
}

