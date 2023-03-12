import React from 'react';

import { Header } from 'shared/ui/Header';
import { Property } from 'entities/properties';
import { Parameter, ParameterType } from 'entities/parameter'

import { NumberPropertyFields } from './components/NumberPropertyFields';
import { StringPropertyFields } from './components/StringPropertyFields';
import { DatePropertyFields } from './components/DatePropertyFields';

type Props = {
    parameter: Parameter;
}
export const EditParameterFields = ({ parameter }: Props) => {
    const { label, property, type } = parameter;

    const updateProperty = (fields: Property) => {
        console.log(fields);
    }

    const renderParameterFields = () => {
        switch (type) {
            case ParameterType.NUMBER:
                return <NumberPropertyFields property={property} onChange={updateProperty} />;
            case ParameterType.STRING:
                return <StringPropertyFields property={property} onChange={updateProperty} />;
            case ParameterType.DATE:
            default:
                return <DatePropertyFields property={property} onChange={updateProperty} />;
        }
    };

    return <div>
        <Header>{label}</Header>
        {renderParameterFields()}
    </div>;
}
