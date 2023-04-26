import { generateCode } from 'shared/utils/generateIds';

import { ELEMENT_TYPE, IComponent } from './component';

export interface IFormTree {
    items: IComponent[];
}

export const initialForm: IFormTree = {
  items: [{
    name: 'Форма по умолчанию',
    type: ELEMENT_TYPE.FORM,
    code: generateCode(),
    items: [
      {
        type: ELEMENT_TYPE.TAB, code: generateCode(), name: 'Страница №1', items: [
          {
            type: ELEMENT_TYPE.PAGE,
            code: generateCode(),
            name: 'Страница №1',
            items: [],
          },
        ],
      },
    ],
  }],
};
