import { ELEMENT_PARAMETER_MAP, ELEMENT_TYPE, IComponent, IForm } from 'domain/component';
import { createInitialForm, DEFAULT_COMPONENTS, initialForm } from 'domain/tree';

import { ComponentService } from './component';
import { ParameterService } from './parameter';
import { PropertiesService } from './properties';
import { TreeService } from './tree';

export class AppService extends TreeService<IForm> {
  private parameterService: ParameterService;
  private componentService: ComponentService;
  private propertiesService: PropertiesService;
  private formTree: IForm;

  constructor(
    parameterService: ParameterService,
    componentService: ComponentService,
    propertiesService: PropertiesService,
  ) {
    super();
    this.parameterService = parameterService;
    this.componentService = componentService;
    this.propertiesService = propertiesService;
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

}
