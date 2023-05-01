import React, { ComponentType } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { ZoomPanel } from 'ui/components/ZoomPanel';

import styles from './withZooming.module.scss';

export const DEFAULT_SCALE = 1;

export const withZooming = <P extends object>(Component: ComponentType<P>) => {
  return function ZoomedComponent(props: P) {

    return <TransformWrapper initialScale={DEFAULT_SCALE}>
      <ZoomPanel/>
      <TransformComponent
        wrapperClass={styles.zoomWrapper}
        contentClass={styles.zoomComponent}
      >
        <Component {...props} />
      </TransformComponent>
    </TransformWrapper>;
  }
  ;
};
