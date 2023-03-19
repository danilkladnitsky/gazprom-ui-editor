import React from 'react'

import { TextField } from '@mui/material';
import { StringParameter } from 'entities/parameter';

type Props = {
    element: StringParameter;
}

export const StringInput = ({ element }: Props) => {
    const { name, properties } = element;

    const { multiline, lineCount } = properties || {};

    return (
        <TextField label={name} multiline={multiline} minRows={lineCount} />
    )
};
