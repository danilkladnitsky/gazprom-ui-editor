import { insertElementToArray } from "shared/utils/insertElementToArray";
import { SchemaTree } from "./domain";

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

  [secondNode.id, firstNode.id] = [firstNode.id, secondNode.id];

  return tree;
};

export const insertNodeByNeighbor = (
  tree: SchemaTree,
  nodeId: EntityId,
  neighborId: EntityId
) => {
  const neighborNode = dfsFindNode(tree, neighborId);
  if (!neighborNode) return tree;

  const neighborParent = dfsFindNodeRoot(tree, neighborId);
  const neigborIndex = neighborParent?.items?.findIndex(
    (i) => i.id === neighborId
  );

  if (!neighborParent?.items || typeof neigborIndex === "undefined")
    return tree;

  neighborParent.items = insertElementToArray(
    neighborParent.items,
    { id: nodeId },
    neigborIndex
  );

  return tree;
};

const dfsFindNodeRoot = (tree: SchemaTree, id: EntityId): SchemaTree | null => {
  if (tree.id === id) return tree;

  if (!tree) return null;

  const node = tree.items?.find((t) => t.id === dfsFindNode(t, id)?.id) || null;

  return node ? tree : null;
};

const dfsFindNode = (tree: SchemaTree, id: EntityId): SchemaTree | null => {
  if (tree.id === id) return tree;

  if (!tree) return null;

  const node = tree.items?.find((t) => t.id === dfsFindNode(t, id)?.id) || null;

  return node;
};
