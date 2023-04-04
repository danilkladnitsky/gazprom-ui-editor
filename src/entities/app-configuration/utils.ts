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

const dfsFindNode = (tree: SchemaTree, id: EntityId): SchemaTree | null => {
  if (tree.id === id) return tree;

  if (!tree) return null;

  const node = tree.items?.find((t) => t.id === dfsFindNode(t, id)?.id) || null;

  return node;
};
