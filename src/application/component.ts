import { ELEMENT_TYPE, IElement, IGroup, IPage, ITab } from "domain/component";

import { generateCode } from "shared/utils/generateIds";

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
  static createComponent<T extends ELEMENT_TYPE>(
    type: T,
    componentDto: Omit<CreatedComponent<T>, "code" | "type">
  ) {
    return {
      ...componentDto,
      type,
      code: generateCode(),
    } as CreatedComponent<T>;
  }
}
