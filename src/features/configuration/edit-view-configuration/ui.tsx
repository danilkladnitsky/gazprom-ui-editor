import React from 'react'

import { renderComponent } from 'features/render/component';
import { useComponentModel } from 'entities/component';

import styles from "./styles.module.scss";

export const EditViewConfiguration = () => {
    const { selectedComponent } = useComponentModel();

    if (!selectedComponent) {
        return <></>;
    }

    console.log(selectedComponent);

    const Component = renderComponent(selectedComponent);

    return (
        <div className={styles.wrapper}>{Component}</div>
    )
};
