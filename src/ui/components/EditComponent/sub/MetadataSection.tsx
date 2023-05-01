import React from 'react';
import { Stack, Typography } from '@mui/material';

import { IEditConfig } from 'domain/edit-config';
import { PropertyValue } from 'domain/property';

import { MetadataInput } from './MetadataInput';

type Props = {
  data: IEditConfig;
  onChange: (code: string, value: PropertyValue) => void;
}

export const MetadataSection = ({ data, onChange }: Props) => {
  return (
    <Stack spacing={1}>
      <Typography>{data.title}</Typography>
      <Stack spacing={2}>
        {data.fields.map((property) => <MetadataInput
          property={property}
          onChange={onChange}
          key={property.code}
        />)}
      </Stack>
    </Stack>
  );
};
