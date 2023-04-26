import { AppService } from './app';
import { ComponentService } from './component';
import { ParameterService } from './parameter';

export const parameterService = new ParameterService();
export const componentService = new ComponentService();
export const appService = new AppService(parameterService, componentService);
