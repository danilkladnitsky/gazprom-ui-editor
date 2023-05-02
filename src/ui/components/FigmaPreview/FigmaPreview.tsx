import React from 'react';
import { useAppStore } from 'store/appStore';

import styles from './FigmaPreview.module.scss';

export const FigmaPreview = () => {
  const { previewIsActive } = useAppStore();
  return previewIsActive && (
    <iframe
      className={styles.preview}
      width="100%"
      height="100%"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F19yWj5OPNxe8CFX964arzj%2FGazprom-Form-Template%3Fnode-id%3D0%253A1%26t%3DV5nTldJIcWCf9cEZ-1"
    />
  );
};
