import { IBaseParameter } from 'domain/parameter';

export type ElementProps<Parameter extends IBaseParameter> = {
    element: Parameter;
}
