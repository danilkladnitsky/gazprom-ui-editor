import { TextField } from '@mui/material';
import { ComponentElement } from 'entities/component';
import { DateParameter } from 'entities/parameter';
import React from 'react'

export const DateInput = ({ name }: ComponentElement) => {
    return (
        <TextField type="date" label={name} />
    )
};
