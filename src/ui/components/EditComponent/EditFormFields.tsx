import React from 'react';
import { Stack } from '@mui/system';

import { IComponent } from 'domain/component';

import { propertiesService } from 'application';

import { MetadataSection } from './sub/MetadataSection';

type Props = {
  component: IComponent;
}

export const EditFormFields = ({ component }: Props) => {
  const fields = propertiesService.getComponentFields(component);

  return <Stack spacing={2}>
    {fields.filter(f => f.fields.length)
      .map((field, index) => <MetadataSection data={field} key={index} />)}
  </Stack>;

};
