import { ELEMENT_TYPE } from 'domain/component';

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

    generateForm() {
      const parameters = this.parameterService.parameters;
      const components = parameters.map(parameter => {
        const component = this.componentService.
          createComponent(ELEMENT_TYPE.ELEMENT,
            { dataSource: parameter, name: `Компонент ${parameter.name}` });

        return component;
      });

      this.componentService.saveComponents(components);

      return [components];
    }

}
