import { TextField } from '@mui/material';
import { DateParameter } from 'entities/parameter';
import React from 'react'

type Props = {
    parameter: DateParameter;
};


export const DateInput = ({ parameter }: Props) => {
    return (
        <TextField type="date" label={parameter.label} />
    )
};
