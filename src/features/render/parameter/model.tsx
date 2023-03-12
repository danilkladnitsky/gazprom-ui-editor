import React from 'react'

import { Parameter, ParameterType } from 'entities/parameter'
import { StringInput } from 'shared/ui/Configuration/Parameters/StringInput';

export const renderParameter = (parameter: Parameter) => {
    if (parameter.type === ParameterType.STRING) {
        return <StringInput parameter={parameter} />;
    }
}
