import React from 'react'

import { StringParameter } from 'entities/parameter';
import { TextField } from '@mui/material';

type Props = {
    parameter: StringParameter;
    name: string;
};

export const StringInput = ({ parameter, name }: Props) => {
    const { multiline, lineCount } = parameter.property;
    
    return (
        <TextField label={name} multiline={multiline} minRows={lineCount} />
    )
};
