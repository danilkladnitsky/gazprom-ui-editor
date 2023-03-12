import React from 'react'

import { StringParameter } from 'entities/parameter';
import { TextField } from '@mui/material';

type Props = {
    parameter: StringParameter;
};

export const StringInput = ({ parameter }: Props) => {
    const { multiline } = parameter.property;
    
    return (
        <TextField label={parameter.label} multiline={multiline} />
    )
};
