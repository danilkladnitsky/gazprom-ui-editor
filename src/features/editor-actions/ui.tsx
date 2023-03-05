import React from 'react';

import { Button } from '@mui/material';
import {
    RestartAlt as RestartAltIcon,
    Download as DownloadIcon,
    Upload as UploadIcon
} from '@mui/icons-material';

import styles from "./styles.module.scss";

export const EditorActions = () => {
    return (
        <div className={styles.actions}>
            <Button startIcon={<RestartAltIcon />} />
            <Button startIcon={<DownloadIcon />} />
            <Button startIcon={<UploadIcon />} />
        </div>
    )
};
