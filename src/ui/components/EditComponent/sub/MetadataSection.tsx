import React from 'react';
import { Stack, Typography } from '@mui/material';

import { IEditConfig } from 'domain/edit-config';

import { MetadataInput } from './MetadataInput';

type Props = {
    data: IEditConfig;
}

export const MetadataSection = ({ data }: Props) => {
  return (
    <Stack spacing={1}>
      <Typography>{data.title}</Typography>
      <Stack spacing={2}>
        {data.fields.map((property) => <MetadataInput
          property={property}
          key={property.code}
        />)}
      </Stack>
    </Stack>
  );
};
