import React from 'react'

import { Parameter, ParameterType } from 'entities/parameter'
import { StringInput } from 'shared/ui/Configuration/Parameters/StringInput';
import { NumberInput } from 'shared/ui/Configuration/Parameters/NumberInput';
import { DateInput } from 'shared/ui/Configuration/Parameters/DateInput';

export const renderParameter = (parameter: Parameter, name: string) => {
    switch (parameter.type) {
        case ParameterType.NUMBER:
            return <NumberInput parameter={parameter} name={name} />;
        case ParameterType.DATE:
            return <DateInput parameter={parameter} name={name} />;
        default:
            return <StringInput parameter={parameter} name={name} />;
    }
}
