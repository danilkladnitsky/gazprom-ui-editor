import fileDownload from 'js-file-download';

import { ELEMENT_PARAMETER_MAP, ELEMENT_TYPE, IComponent, IForm } from 'domain/component';
import { createInitialForm, DEFAULT_COMPONENTS, initialForm, Tree } from 'domain/tree';

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
            name: `Компонент ${parameter.name}`,
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
        items: this.fillConfigData(t.items || []),
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
          const component = { ...dto, code: generateCode(), items: [] };
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

}
