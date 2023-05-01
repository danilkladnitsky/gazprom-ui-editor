import { AppService } from './app';
import { ComponentService } from './component';
import { ParameterService } from './parameter';
import { PropertiesService } from './properties';

export const parameterService = new ParameterService();
export const componentService = new ComponentService();
export const propertiesService = new PropertiesService();

export const appService = new AppService(
  parameterService,
  componentService,
);
