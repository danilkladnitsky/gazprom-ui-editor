import { useParameterModel } from 'entities/parameter';
import React from 'react'

import styles from "./styles.module.scss";

export const EditComponentParameters = () => {
    const { selectedParameter } = useParameterModel();

    console.log(selectedParameter);
    
  return (
    <div className={styles.wrapper}>
        
    </div>
  )
}
