import React from 'react'

import { Component } from 'entities/component';

import { renderParameter } from '../parameter';

export const renderComponent = ({ code, parameter, name }: Component) => {

    const parametrizedComponent = renderParameter(parameter);

    return parametrizedComponent;
};
