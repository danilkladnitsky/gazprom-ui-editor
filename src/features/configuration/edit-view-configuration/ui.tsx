import React from 'react'

import { renderComponent } from 'features/render/component';
import { useComponentModel } from 'entities/component';

export const EditViewConfiguration = () => {
    const { selectedComponent } = useComponentModel();

    if (!selectedComponent) {
        return <></>;
    }

    const Component = renderComponent(selectedComponent);

    return (
        <div>{Component}</div>
    )
};
