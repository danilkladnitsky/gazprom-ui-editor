import { SchemaTree } from './domain';

export const findComponentById = (
  id: EntityId,
  tree: SchemaTree,
): SchemaTree | false => {
  if (id === tree.id) {
    return tree;
  } else if (tree.items) {
    let res: SchemaTree | false = false;
    for (const subTree of tree.items) {
      res = findComponentById(id, subTree);
    }
    return res;
  } else {
    return false;
  }
};
