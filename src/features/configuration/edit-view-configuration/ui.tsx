import React from 'react'

import { renderElement } from 'features/render/component';
import { useComponentModel } from 'entities/component';

import styles from "./styles.module.scss";
import { renderRecursiveTree } from '../render-component-tree';

import tree from "shared/metadata/form.json";

export const EditViewConfiguration = () => {
    const { selectedComponent } = useComponentModel();

    if (!selectedComponent) {
        return <></>;
    }

    return (
        <div className={styles.wrapper}>{renderRecursiveTree(tree)}</div>
    )
};
