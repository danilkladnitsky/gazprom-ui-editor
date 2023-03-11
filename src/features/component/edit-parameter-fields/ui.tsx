import React from 'react';

import { Header } from 'shared/ui/Header';
import { ParameterType, useParameterModel } from 'entities/parameter'

import { NumberParameter } from './components/NumberParameter';
import { StringParameter } from './components/StringParameter';
import { DateParameter } from './components/DateParameter';

export const EditParameterFields = () => {
    const { selectedParameter } = useParameterModel();

    if (!selectedParameter) {
        return <></>;
    }

    const { label, property, type } = selectedParameter;

    const renderParameterFields = () => {
        switch (type) {
            case ParameterType.NUMBER:
                return <NumberParameter property={property} />;
            case ParameterType.STRING:
                return <StringParameter property={property} />;
            case ParameterType.DATE:
            default:
                return <DateParameter property={property} />;
        }
    };

    return <div>
        <Header>{label}</Header>
        {renderParameterFields()}
    </div>;
}
