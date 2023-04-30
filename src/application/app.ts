import { ELEMENT_TYPE, IComponent, IForm } from 'domain/component';
import { createInitialForm, initialForm } from 'domain/tree';

import { ComponentService } from './component';
import { ParameterService } from './parameter';
import { TreeService } from './tree';

export class AppService extends TreeService<IForm> {
  private parameterService: ParameterService;
  private componentService: ComponentService;
  private formTree: IForm;

  constructor(parameterService: ParameterService,
    componentService: ComponentService) {
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
          { dataSource: parameter, name: `Компонент ${parameter.name}` });

      return component;
    });

    this.componentService.saveComponents(components);

    const form = createInitialForm(components);
    this.formTree = form;

    return [components, form];
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
