import { IComponent } from 'domain/component';

export class TreeService {
  public findNode<Tree extends IComponent>(tree: Tree, id: EntityId)
        : IComponent | undefined {
    if (tree.code === id) {
      return tree;
    }

    if (!tree.items) {
      return;
    }

    for (let i = 0; i < tree.items.length; i++) {
      const subTree = tree.items[i];

      if (subTree.code === id) {
        return subTree;
      }

      return this.findNode(subTree, id);
    }

  }
}
