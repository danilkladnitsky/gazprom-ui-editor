import { TextField } from '@mui/material';
import { DateParameter } from 'entities/parameter';
import React from 'react'

type Props = {
    parameter: DateParameter;
    name: string;
};


export const DateInput = ({ parameter, name }: Props) => {
    return (
        <TextField type="date" label={name} />
    )
};
