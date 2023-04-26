import { ELEMENT_TYPE, IComponent } from 'domain/component';
import { IFormTree, initialForm } from 'domain/tree';

import { ComponentService } from './component';
import { ParameterService } from './parameter';

export class AppService {
    private parameterService: ParameterService;
    private componentService: ComponentService;

    constructor(parameterService: ParameterService,
      componentService: ComponentService) {
      this.parameterService = parameterService;
      this.componentService = componentService;
    }

    generateForm(): [IComponent[], IFormTree] {
      const parameters = this.parameterService.parameters;
      const components = parameters.map(parameter => {
        const component = this.componentService.
          createComponent(ELEMENT_TYPE.ELEMENT,
            { dataSource: parameter, name: `Компонент ${parameter.name}` });

        return component;
      });

      const form = { ...initialForm, items: components };

      this.componentService.saveComponents(components);

      return [components, form];
    }

}
