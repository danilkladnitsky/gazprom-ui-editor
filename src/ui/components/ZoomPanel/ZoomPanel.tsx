import React, { useState } from 'react';
import { useControls } from 'react-zoom-pan-pinch';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button, Slider } from '@mui/material';
import { DEFAULT_SCALE } from 'ui/hocs/withZooming';

import styles from './ZoomPanel.module.scss';

export const ZoomPanel = () => {
  const { resetTransform, centerView, setTransform, instance } = useControls();
  const [scale, setScale] = useState(DEFAULT_SCALE);

  const [zoomInstance] = useState(instance);

  const zoom = (value: number) => {

    setScale(value);

    setTransform(
      zoomInstance.props.initialPositionX || 0,
      zoomInstance.props.initialPositionY || 0,
      value,
    );
  };

  const resetZoom = () => {
    setScale(DEFAULT_SCALE);
    resetTransform();
  };

  return <div className={styles.zoomPanel}>
    <div>
      <Button
        className={styles.centerBtn}
        onClick={() => centerView()}
      >
        <FilterCenterFocusIcon />
      </Button>
      <Button
        className={styles.centerBtn}
        onClick={resetZoom}
      >
        <RestartAltIcon />
      Сбросить
      </Button>
    </div>
    <div className={styles.sliderZoom}>
      <Slider
        aria-label="Zoom"
        orientation="vertical"
        defaultValue={zoomInstance.props.initialScale}
        valueLabelDisplay="auto"
        value={scale}
        onChange={(e, v) => zoom(v as number)}
        min={0}
        max={2}
        step={0.1}
      />
    </div>

  </div>;
};
