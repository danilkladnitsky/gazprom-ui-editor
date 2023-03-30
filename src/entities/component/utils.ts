import { ComponentTree } from "./domain";

export const findComponentById = (
  id: EntityId,
  tree: ComponentTree
): ComponentTree | false => {
  if (id === tree.id) {
    return tree;
  } else if (tree.items) {
    let res: ComponentTree | false = false;
    for (const subTree of tree.items) {
      res = findComponentById(id, subTree);
    }
    return res;
  } else {
    return false;
  }
};
