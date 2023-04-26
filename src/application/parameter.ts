import { ConfigReader } from "app/config";

import { IParameter } from "domain/parameter";

export class ParameterService {
  public async readParametersFile(file: File): Promise<IParameter[]> {
    return await ConfigReader.read<IParameter[]>(file);
  }
}
