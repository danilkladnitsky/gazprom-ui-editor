import { ConfigReader } from 'app/config';

import { IParameter } from 'domain/parameter';

import { generateCode } from 'shared/utils/generateIds';

export class ParameterService {
  parameters: IParameter[] = [];

  constructor() {
    this.parameters = [];
  }

  public async readParametersFile(file: File): Promise<IParameter[]> {
    try {
      const rawParameters = await ConfigReader.read<IParameter[]>(file);
      const preparedParameters = rawParameters.map((p) => ({
        ...p,
        code: generateCode(),
      }));

      this.parameters = preparedParameters;
      return preparedParameters;
    } catch (err) {
      return [];
    }
  }
}
