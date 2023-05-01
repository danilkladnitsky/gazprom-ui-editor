import React from 'react';
import { useComponentsStore } from 'store/componentStore';
import { Checkbox } from 'ui/shared/Checkbox';
import { DropdownInput } from 'ui/shared/DropdownInput';
import { TextInput } from 'ui/shared/TextInput';
import { toDropdownList } from 'ui/utils/toDropdownList';

import { IPropertyConfig } from 'domain/edit-config';
import { PROPERTY_VALUE_TYPE,PropertyValue } from 'domain/property';

type Props = {
  property: IPropertyConfig;
  onChange: (code: string, value: PropertyValue) => void;
}
export const MetadataInput = ({ property, onChange }: Props) => {
  const { selectedComponent } = useComponentsStore();
  const { type, name, options, code } = property;

  const updateProperty = (code: string, value: PropertyValue) => {
    onChange(code, value);
  };

  const properties = selectedComponent?.properties || {};

  const value = properties[code] as any;

  switch (type) {
  case PROPERTY_VALUE_TYPE.BOOLEAN:
    return <Checkbox name={name}
      onChange={updateProperty.bind({}, code)}
      checked={!!value} />;
  case PROPERTY_VALUE_TYPE.LIST:
    return <DropdownInput
      name={name}
      list={toDropdownList(options || [])}
      onChange={updateProperty.bind({}, code)}
      value={value}
    />;
  case PROPERTY_VALUE_TYPE.INTEGER:
    return <TextInput
      label={name}
      type="number"
      onChange={updateProperty.bind({}, code)}
      value={value}
    />;
  case PROPERTY_VALUE_TYPE.DATE:
    return <TextInput
      label={name}
      type="date"
      onChange={updateProperty.bind({}, code)}
      value={value}
    />;
  case PROPERTY_VALUE_TYPE.STRING:
  default:
    return <TextInput
      label={name}
      onChange={updateProperty.bind({}, code)}
      value={value}
    />;
  }
};
