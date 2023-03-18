import React from 'react'

import { TextField } from '@mui/material';
import { ComponentElement } from 'entities/component';

export const StringInput = ({ properties, name }: ComponentElement) => {
    const { multiline, lineCount } = properties || {};

    return (
        <TextField label={name} multiline={multiline} minRows={lineCount} />
    )
};
