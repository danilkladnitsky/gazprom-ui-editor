import React from 'react';
import { Stack, Typography } from '@mui/material';

import { IEditConfig, IPropertyConfig } from 'domain/edit-config';
import { PropertyValue } from 'domain/property';

import { generateEntityId } from 'shared/utils/generateIds';

import { PropertyUpdateFn } from '../EditFormFields';

import { ChangeView } from './ChangeView';
import { MetadataInput } from './MetadataInput';

type Props = {
  data: IEditConfig;
  onChange: PropertyUpdateFn;
}

export const MetadataSection = ({ data, onChange }: Props) => {
  return (
    <Stack spacing={1}>
      <Typography>{data.title}</Typography>
      <Stack spacing={2}>
        {data.fields.map((property) => getInputByCode(property, onChange))}
      </Stack>
    </Stack>
  );
};

const getInputByCode = (property: IPropertyConfig, onChange: PropertyUpdateFn) => {
  switch (property.code) {
  case 'view':
    return <ChangeView property={property} key={generateEntityId()} />;
  default:
    return <MetadataInput onChange={onChange} property={property} key={generateEntityId()} />;
  }
};
