import React from 'react'

import { Parameter, ParameterType } from 'entities/parameter'
import { StringInput } from 'shared/ui/Configuration/Parameters/StringInput';
import { NumberInput } from 'shared/ui/Configuration/Parameters/NumberInput';
import { DateInput } from 'shared/ui/Configuration/Parameters/DateInput';

export const renderParameter = (parameter: Parameter) => {
    if (parameter.type === ParameterType.STRING) {
        return <StringInput parameter={parameter} />;
    }

    switch (parameter.type) {
        case ParameterType.NUMBER:
            return <NumberInput parameter={parameter} />;
        case ParameterType.DATE:
            return <DateInput parameter={parameter} />;
        default:
            return <StringInput parameter={parameter} />;
    }
}
