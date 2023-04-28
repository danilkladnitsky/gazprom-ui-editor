import { ELEMENT_TYPE, IComponent, IElement, IGroup, IPage, ITab } from 'domain/component';

import { generateCode } from 'shared/utils/generateIds';

type CreatedComponent<T extends ELEMENT_TYPE> = T extends ELEMENT_TYPE.ELEMENT
  ? IElement
  : T extends ELEMENT_TYPE.GROUP
  ? IGroup
  : T extends ELEMENT_TYPE.PAGE
  ? IPage
  : T extends ELEMENT_TYPE.TAB
  ? ITab
  : never;

export class ComponentService {
  components: IComponent[] = [];
  createComponent<T extends ELEMENT_TYPE>(
    type: T,
    componentDto: Omit<CreatedComponent<T>, 'code' | 'type'>,
  ) {

    const createdComponent = {
      ...componentDto,
      type,
      code: generateCode(),
    } as CreatedComponent<T>;

    this.components.push(createdComponent);

    return createdComponent;
  }

  updateComponent(code: EntityId, componentDto: Partial<IComponent>)
    : [IComponent | null, IComponent[]] {
    const componentToUpdate = this.components.find(c => c.code === code);

    if (!componentToUpdate) {
      return [null, this.components];
    }

    const updatedComponent = {
      ...componentToUpdate,
      ...componentDto,
    } as IComponent;

    this.components.map(c => c.code === code ? updatedComponent : c);

    return [updatedComponent, this.components];
  }

  saveComponents(components: IComponent[]): void {
    this.components = components;
  }
}
