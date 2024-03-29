import React from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Stack } from '@mui/system';
import { useComponentsStore } from 'store/componentStore';

import { ELEMENT_TYPE, IComponent } from 'domain/component';
import { PropertyValue } from 'domain/property';

import { propertiesService } from 'application';

import { ChangeParameter } from './sub/ChangeParameter';
import { MetadataSection } from './sub/MetadataSection';

type Props = {
  component: IComponent;
}

export type PropertyUpdateFn = (code: string, value: PropertyValue) => void;

export const EditFormFields = ({ component }: Props) => {
  const { updateSelectedComponent, selectedComponent } = useComponentsStore();
  const fields = propertiesService.getComponentFields(component);

  const [animRef] = useAutoAnimate();

  const handleComponentUpdate: PropertyUpdateFn = (code, value) => {
    updateSelectedComponent({
      properties: {
        ...selectedComponent?.properties,
        [code]: value,
      } });
  };

  const hasParameter = selectedComponent?.type === ELEMENT_TYPE.ELEMENT;

  return <Stack spacing={2} ref={animRef}>
    {hasParameter && <ChangeParameter element={selectedComponent} />}
    {fields.filter(f => f.fields.length)
      .map((field) => <MetadataSection
        onChange={handleComponentUpdate}
        data={field}
        key={field.title}
      />)}
  </Stack>;

};
