import { generateCode } from 'shared/utils/generateIds';

import { ELEMENT_TYPE, IComponent, IElement, IForm } from './component';

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

export const createInitialForm = (components: IElement[]): IForm => ({
  code: generateCode(),
  name: 'Форма по умолчанию',
  type: ELEMENT_TYPE.FORM,
  items: [
    {
      type: ELEMENT_TYPE.TAB, code: generateCode(), name: 'Таб №1', items: [
        {
          type: ELEMENT_TYPE.PAGE,
          code: generateCode(),
          name: 'Страница №1',
          items: [...components],
        },
      ],
    },
  ],
});
