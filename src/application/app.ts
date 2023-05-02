import fileDownload from 'js-file-download';

import { ELEMENT_PARAMETER_MAP, ELEMENT_TYPE, IComponent, IForm } from 'domain/component';
import { createInitialForm, DEFAULT_COMPONENTS, initialForm, Tree, TREE_ACTIONS,TreeActionPayload } from 'domain/tree';

import { generateCode } from 'shared/utils/generateIds';

import { ComponentService } from './component';
import { ParameterService } from './parameter';
import { TreeService } from './tree';

export class AppService extends TreeService<IForm> {
  private parameterService: ParameterService;
  private componentService: ComponentService;
  private formTree: IForm;

  constructor(
    parameterService: ParameterService,
    componentService: ComponentService,
  ) {
    super();
    this.parameterService = parameterService;
    this.componentService = componentService;
    this.formTree = initialForm;
  }

  generateForm(): [IComponent[], IForm] {
    const parameters = this.parameterService.parameters;
    const components = parameters.map(parameter => {
      const component = this.componentService.
        createComponent(ELEMENT_TYPE.ELEMENT,
          {
            dataSource: parameter.name,
            name: `Компонент ${parameter.type}`,
            properties: {},
            as: ELEMENT_PARAMETER_MAP[parameter.type][0],
          });

      return component;
    });

    const componentsToSave = [...Object.values(DEFAULT_COMPONENTS),
      ...components];

    const form = createInitialForm(components);
    this.formTree = form;
    this.componentService.saveComponents(componentsToSave);

    return [componentsToSave, form];
  }

  insertComponent(component: IComponent, targetCode: EntityId): IForm {
    const fromRoot = this.findNode(this.formTree, component.code);
    const toRoot = this.findNode(this.formTree, targetCode);

    if (!fromRoot || !toRoot) {
      return this.formTree;
    }

    const tree = this.swapTreeElements(
      this.formTree,
      fromRoot?.code, toRoot?.code,
    );

    this.formTree = tree;

    return this.formTree;
  }

  downloadConfig(): void {
    const fileName = `${this.formTree.name}.json`;
    const resolvedTree = this.fillConfigData([this.formTree]);

    fileDownload(JSON.stringify(resolvedTree, this.removeTreeKeys), fileName);
  }

  fillConfigData(tree: Tree[]) {
    return tree.map((t) => {
      const component = this.componentService.components.find((c) => c.code === t.code);

      return {
        ...component,
        items: t.items ? this.fillConfigData(t.items) : undefined,
      };
    });
  }

  uploadConfig(config: IForm): [IComponent[], IForm] {
    const parsedComponents: IComponent[] = [];
    const newForm: IForm = { items: [] };
    const formHead = newForm;

    const parseComponents = (components: IComponent[], head: IForm) => {
      if (!components || !components.length) {
        return;
      }

      head.items = [];
      for (let i = 0; i < components.length; i++) {
        const element = components[i];

        const { items, ...dto } = element;

        if (dto.type) {
          const component = { ...dto, code: generateCode(), items: items ? items : undefined };
          parsedComponents.push(component);
          head.items.push(component);
        }

        if (items) {
          head = dto.type ? head.items[head.items.length - 1] : head;

          parseComponents(items, head);
        }
      }
    };

    parseComponents([{ items: [config] }], formHead);

    const formTree = formHead.items[0];

    this.formTree = formTree;

    this.componentService.saveComponents(parsedComponents);

    return [this.componentService.components, this.formTree];

  }

  private removeTreeKeys(key: string, value: unknown) {
    const keysToRemove = ['code'];

    return keysToRemove.includes(key) ? undefined : value;
  }

  placeComponent(payload: TreeActionPayload<TREE_ACTIONS.PLACE_NODE>): IForm {
    const { itemId, pos } = payload;
    const parent = this.findNodeRoot(this.formTree, itemId);

    if (!parent) {
      return this.formTree;
    }

    if (!parent.items) {
      parent.items = [];
      const component = this.componentService.components.find(c => c.code === itemId);

      parent.items.push(component);

      return this.formTree;
    }

    const origItemIndex = parent.items.findIndex(c => c.code === itemId);

    [
      parent.items[origItemIndex],
      parent.items[pos],
    ] = [
      parent.items[pos],
      parent.items[origItemIndex],
    ];

    return this.formTree;

  }

  addChildren(payload: TreeActionPayload<TREE_ACTIONS.ADD_CHILDREN>) {
    const { childId, parentId } = payload;
    const parent = this.findNode(this.formTree, parentId);
    const childParent = this.findNodeRoot(this.formTree, childId);

    const inSameParent = childParent !== parent;

    if (!inSameParent) {
      return this.formTree;
    }

    if (!parent) {
      return this.formTree;
    }

    const component = this.findNode(this.formTree, childId);

    if (!component) {
      return this.formTree;
    }

    if (!parent.items) {
      parent.items = [component];
    } else {
      parent.items.push(component);
    }

    const canRemoveFromParent = childParent && childParent?.items;

    if (canRemoveFromParent) {
      childParent.items = childParent?.items?.filter(i => i.code !== childId);
    }

    return this.formTree;

  }

  copyToParentComponent(payload: TreeActionPayload<TREE_ACTIONS.COPY_TO_PARENT>) {
    const { nodeId, parentId } = payload;
    const parent = this.findNode(this.formTree, parentId);
    const node = this.findNode(this.formTree, nodeId);

    if (!parent || !node) {
      return this.formTree;
    }

    if (!parent.items) {
      parent.items = [node];
    } else {
      parent.items.unshift(node);
    }

    return this.formTree;
  }

}
