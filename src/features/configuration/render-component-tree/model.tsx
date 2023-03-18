import React from "react";

import { ComponentTree } from "entities/component";

import { TreeItem } from "./components/TreeItem";

export function renderRecursiveTree(tree: ComponentTree) {

  const renderSubTree = (subTree: ComponentTree) => {
    console.log(subTree);
    
    return (
      subTree.items &&
      subTree.items.map((component) => (
        <TreeItem component={component} key={component.name}>
          {renderSubTree(component)}
        </TreeItem>
      ))
    );
  };

  return renderSubTree(tree);
}

