import React, { ComponentType } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { ZoomPanel } from 'ui/components/ZoomPanel';

import styles from './withZooming.module.scss';

const DEFAULT_SCALE = {
  initialScale: 1.1,
};

export const withZooming = <P extends object>(Component: ComponentType<P>) => {
  return function ZoomedComponent(props: P) {

    return <TransformWrapper {...DEFAULT_SCALE} centerOnInit>
      {(zoomProps) => <>
        <ZoomPanel {...zoomProps} />
        <TransformComponent wrapperClass={styles.zoomComponent}>
          <Component {...props} />
        </TransformComponent></>
      }
    </TransformWrapper>;
  }
  ;
};
