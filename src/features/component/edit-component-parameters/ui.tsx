import React from 'react';

import { useParameterModel } from 'entities/parameter';

import styles from "./styles.module.scss";
import { EditParameterFields } from '../edit-parameter-fields';

export const EditComponentParameters = () => {
    const { selectedParameter } = useParameterModel();

    console.log(selectedParameter);
    
  return (
    <div className={styles.wrapper}>
        <EditParameterFields />
    </div>
  )
}
