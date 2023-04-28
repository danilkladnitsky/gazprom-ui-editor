import { IComponent } from 'domain/component';

import { insertElementToArray } from 'shared/utils/insertElementToArray';

export class TreeService<Tree extends IComponent> {
  swapTreeElements (
    tree: Tree,
    firstId: EntityId,
    secondId: EntityId,
  ): Tree {
    const firstNode = this.findNode(tree, firstId);
    const secondNode = this.findNode(tree, secondId);

    if (!firstNode || !secondNode) {
      return tree;
    }

    const firstParent = this.findNodeRoot(tree, firstNode.code);
    const secondParent = this.findNodeRoot(tree, secondNode.code);

    if (!firstParent || !secondParent) {
      return tree;
    }

    const hasCommonParent = firstParent?.code === secondParent?.code;

    if (hasCommonParent) {
      [secondNode.code, firstNode.code] = [firstNode.code, secondNode.code];
      [secondNode.items, firstNode.items] = [firstNode.items, secondNode.items];
    } else {
      this.insertNodeByNeighbor(tree, firstId, secondId);
      firstParent.items = firstParent?.items?.filter((n) => n.code !== firstId);
    }

    return tree;
  }

  insertNodeByNeighbor(
    tree: Tree,
    nodeId: EntityId,
    neighborId: EntityId,
  ) {
    const neighborNode = this.findNode(tree, neighborId);
    const insertedNode = this.findNode(tree, nodeId);

    if (!neighborNode || !insertedNode) return tree;

    const neighborParent = this.findNodeRoot(tree, neighborId);
    const neigborIndex = neighborParent?.items?.findIndex(
      (i) => i.code === neighborId,
    );

    if (!neighborParent?.items || typeof neigborIndex === 'undefined')
      return tree;

    neighborParent.items = insertElementToArray(
      neighborParent.items,
      insertedNode,
      neigborIndex,
    );

    return tree;
  }
  public findNode(tree: Tree, code: EntityId): IComponent | undefined {
    if (tree.code === code) {
      return tree;
    }

    const items = tree.items || [];

    for (let i = 0; i < items.length; i++) {
      const subTree = this.findNode(items[i], code);

      if (subTree?.code === code) {
        return subTree;
      }
    }
  }

  public findNodeRoot(tree: Tree, code: EntityId)
    : IComponent | undefined {
    if (!tree) return;

    const child = tree.items?.find((t) => t.code === code);

    if (child) {
      return tree;
    }

    const items = tree.items || [];
    for (let i = 0; i < items.length; i++) {
      const element = this.findNodeRoot(items[i], code);
      if (element) {
        return element;
      }
    }

    return;
  }
}
