import { ELEMENT_TYPE, IComponent, IElement, IGroup, IPage, ITab } from 'domain/component';

import { generateCode } from 'shared/utils/generateIds';

export type TypeComponent<T extends ELEMENT_TYPE> = T extends
  ELEMENT_TYPE.ELEMENT
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
    componentDto: Omit<TypeComponent<T>, 'code' | 'type'>,
  ) {

    const TypeComponent = {
      ...componentDto,
      type,
      code: generateCode(),
    } as TypeComponent<T>;

    this.components.push(TypeComponent);

    return TypeComponent;
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

    this.components = this.components
      .map(c => c.code === code ? updatedComponent : c);

    return [updatedComponent, this.components];
  }

  saveComponents(components: IComponent[]): void {
    this.components = components;
  }
}
