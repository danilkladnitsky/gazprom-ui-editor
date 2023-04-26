import { ConfigReader } from "app/config";

import { IParameter } from "domain/parameter";

import { generateCode } from "shared/utils/generateIds";

export class ParameterService {
  public async readParametersFile(file: File): Promise<IParameter[]> {
    const rawParameters = await ConfigReader.read<IParameter[]>(file);
    const preparedParameters = rawParameters.map((p) => ({
      ...p,
      code: generateCode(),
    }));

    return preparedParameters;
  }
}
