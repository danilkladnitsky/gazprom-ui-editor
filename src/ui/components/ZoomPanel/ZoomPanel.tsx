import React, { useState } from 'react';
import { useControls } from 'react-zoom-pan-pinch';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button, Slider, Stack } from '@mui/material';
import { useAppStore } from 'store/appStore';
import { DEFAULT_SCALE } from 'ui/hocs/withZooming';

import styles from './ZoomPanel.module.scss';

export const ZoomPanel = () => {
  const { form, fullScreen, setFullScreen } = useAppStore();
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

  const handleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  if (!form) {
    return null;
  }

  return <div className={styles.zoomPanel}>
    <Stack direction={'row'} spacing={3} className={styles.buttons}>
      <Button
        className={styles.centerBtn}
        onClick={() => centerView()}
        startIcon={ <FilterCenterFocusIcon />}
      >
      Отцентровать
      </Button>
      <Button
        className={styles.centerBtn}
        onClick={resetZoom}
        startIcon={<RestartAltIcon />}
      >
      Сбросить
      </Button>
      <Button startIcon={<AspectRatioIcon />} onClick={handleFullScreen}>
        Полноэкранный режим
      </Button>
    </Stack>
    <Slider
      className={styles.sliderZoom}
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
  </div>;
};
