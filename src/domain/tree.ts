import { generateCode } from 'shared/utils/generateIds';

import { ELEMENT_TYPE, IComponent, IElement, IForm } from './component';

export enum TREE_ACTIONS {
  ADD_CHILDREN = 'add-to-node',
  REPLACE_NODES = 'replace-nodes',
  REMOVE_NODE = 'remove-node',
  PLACE_NODE = 'place-node',
}

export type TreeActionPayload<T extends TREE_ACTIONS> = T extends TREE_ACTIONS.ADD_CHILDREN
  ? { parentId: EntityId, childId: EntityId }
  : T extends TREE_ACTIONS.REMOVE_NODE
  ? { itemId: EntityId }
  : T extends TREE_ACTIONS.REPLACE_NODES
? { firstId: EntityId, secondId: EntityId }
: T extends TREE_ACTIONS.PLACE_NODE
  ? {itemId: EntityId, pos: number}
  : never;

export type Tree = {
  code: EntityId;
  items?: Tree[];
}

export type TreeItem = {
  code: EntityId;
}

export interface IFormTree {
  code: EntityId;
  name: string,
  type: ELEMENT_TYPE,
  items: IComponent[];
}

export const initialForm: IForm = {
  code: generateCode(),
  items: [],
  type: ELEMENT_TYPE.FORM,
  name: 'app-root',
};

export const DEFAULT_COMPONENTS: { [key: string]: IComponent } = {
  'FORM': {
    code: generateCode(),
    name: 'Форма по умолчанию',
    type: ELEMENT_TYPE.FORM,
    items: [],
  },
  'TAB': {
    type: ELEMENT_TYPE.TAB,
    code: generateCode(),
    name: 'Таб №1',
    items: [],
  },
  'PAGE1': {
    type: ELEMENT_TYPE.PAGE,
    code: generateCode(),
    name: 'Страница №1', items: [],
  },
  'PAGE2': {
    type: ELEMENT_TYPE.PAGE,
    code: generateCode(),
    name: 'Страница №2', items: [],
  },
  'GROUP1': {
    name: 'Группа #1',
    code: generateCode(),
    type: ELEMENT_TYPE.GROUP,
    items: [],
  },
  'GROUP2': {
    name: 'Группа #2',
    code: generateCode(),
    type: ELEMENT_TYPE.GROUP,
    items: [],
  },
};

export const createInitialForm = (components: IElement[]): IForm => {
  return ({
    ...DEFAULT_COMPONENTS['FORM'],
    items: [
      {
        ...DEFAULT_COMPONENTS['TAB'],
        items: [
          {
            ...DEFAULT_COMPONENTS['PAGE1'],
            items: [
              {
                ...DEFAULT_COMPONENTS['GROUP1'],
                items: [...components.filter((v, i) => i % 2 === 1)],
              },
              {
                ...DEFAULT_COMPONENTS['GROUP2'],
                items: [...components.filter((v, i) => i % 2 === 0)],
              },
            ],
          },
          {
            ...DEFAULT_COMPONENTS['PAGE2'],
            items: [],
          },
        ],
      },
    ],
  });
};
