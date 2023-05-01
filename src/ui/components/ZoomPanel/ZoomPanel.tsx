import React from 'react';
import { ReactZoomPanPinchContentRef } from 'react-zoom-pan-pinch';
import { Button } from '@mui/material';

import styles from './ZoomPanel.module.scss';

export const ZoomPanel = ({ zoomIn, zoomOut, centerView }:
  ReactZoomPanPinchContentRef) => {
  return <div className={styles.zoomPanel}>
    <Button onClick={() => zoomIn()}>Приблизить</Button>
    <Button onClick={() => zoomOut()}>Уменьшить</Button>
    <Button onClick={() => centerView()}>Сбросить</Button>
  </div>;
};
