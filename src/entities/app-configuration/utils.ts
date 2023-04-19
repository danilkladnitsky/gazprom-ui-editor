import { Component } from "entities/component/domain";
import { insertElementToArray } from "shared/utils/insertElementToArray";
import { SchemaTree } from "./domain";

const prohibitedFields = ["id", "timestamp"];

export const swapTreeElements = (
  tree: SchemaTree,
  firstId: EntityId,
  secondId: EntityId
): SchemaTree => {
  const firstNode = dfsFindNode(tree, firstId);
  const secondNode = dfsFindNode(tree, secondId);

  if (!firstNode || !secondNode) {
    return tree;
  }

  const firstParent = dfsFindNodeRoot(tree, firstNode.id);
  const secondParent = dfsFindNodeRoot(tree, secondNode.id);

  if (!firstParent || !secondParent) {
    return tree;
  }

  const hasCommonParent = firstParent?.id === secondParent?.id;

  if (hasCommonParent) {
    [secondNode.id, firstNode.id] = [firstNode.id, secondNode.id];
    [secondNode.items, firstNode.items] = [firstNode.items, secondNode.items];
  } else {
    insertNodeByNeighbor(tree, firstId, secondId);
    firstParent.items = firstParent?.items?.filter((n) => n.id !== firstId);
  }

  return tree;
};

export const insertNodeByNeighbor = (
  tree: SchemaTree,
  nodeId: EntityId,
  neighborId: EntityId
) => {
  const neighborNode = dfsFindNode(tree, neighborId);
  const insertedNode = dfsFindNode(tree, nodeId);

  if (!neighborNode || !insertedNode) return tree;

  const neighborParent = dfsFindNodeRoot(tree, neighborId);
  const neigborIndex = neighborParent?.items?.findIndex(
    (i) => i.id === neighborId
  );

  if (!neighborParent?.items || typeof neigborIndex === "undefined")
    return tree;

  neighborParent.items = insertElementToArray(
    neighborParent.items,
    insertedNode,
    neigborIndex
  );

  return tree;
};

export const deleteNode = (tree: SchemaTree, id: EntityId): SchemaTree => {
  const node = dfsFindNodeRoot(tree, id);

  if (!node?.items) return tree;

  node.items = node?.items?.filter((n) => n.id !== id);

  return tree;
};

const dfsFindNodeRoot = (tree: SchemaTree, id: EntityId): SchemaTree | null => {
  if (!tree) return null;

  const child = tree.items?.find((t) => t.id === id);

  if (child) {
    return tree;
  }

  const items = tree.items || [];
  for (let i = 0; i < items.length; i++) {
    const element = dfsFindNodeRoot(items[i], id);
    if (element) {
      return element;
    }
  }

  return null;
};

const dfsFindNode = (tree: SchemaTree, id: EntityId): SchemaTree | null => {
  if (tree.id === id) {
    return tree;
  }

  if (!tree) return null;

  const items = tree.items || [];

  for (let i = 0; i < items.length; i++) {
    const result = dfsFindNode(items[i], id);

    const hasResult = result?.id === id;

    if (hasResult) {
      return result;
    }
  }

  return null;
};

export const extractJsonBody = (component: Component): string => {
  try {
    return JSON.stringify(component, (key, value) =>
      prohibitedFields.includes(key) ? undefined : value
    );
  } catch (error) {
    console.log(error);

    return "error";
  }
};

export const removeMetadata = (key: string, value: unknown) =>
  prohibitedFields.includes(key) ? undefined : value;

export const fillTreeData = (tree: SchemaTree[], components: Component[]) => {
  return tree.map((t) => {
    const component = components.find((c) => c.id === t.id);

    return { ...component, items: fillTreeData(t.items || [], components) };
  });
};
