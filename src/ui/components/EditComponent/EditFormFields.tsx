import React from 'react';
import { Stack } from '@mui/system';
import { useComponentsStore } from 'store/componentStore';

import { IComponent } from 'domain/component';
import { PropertyValue } from 'domain/property';

import { propertiesService } from 'application';

import { MetadataSection } from './sub/MetadataSection';

type Props = {
  component: IComponent;
}

export const EditFormFields = ({ component }: Props) => {
  const { updateSelectedComponent, selectedComponent } = useComponentsStore();
  const fields = propertiesService.getComponentFields(component);

  const handleComponentUpdate = (code: string, value: PropertyValue) => {
    updateSelectedComponent({
      properties: {
        ...selectedComponent?.properties,
        [code]: value,
      } });

  };

  return <Stack spacing={2}>
    {fields.filter(f => f.fields.length)
      .map((field) => <MetadataSection
        onChange={handleComponentUpdate}
        data={field}
        key={field.title} />)}
  </Stack>;

};
