import React from 'react';
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
  const { type, name, options, code } = property;

  const updateProperty = (code: string, value: PropertyValue) => {
    onChange(code, value);
  };

  switch (type) {
  case PROPERTY_VALUE_TYPE.BOOLEAN:
    return <Checkbox name={name} onChange={updateProperty.bind({}, code)} />;
  case PROPERTY_VALUE_TYPE.LIST:
    return <DropdownInput
      name={name}
      list={toDropdownList(options || [])}
      onChange={updateProperty.bind({}, code)}
    />;
  case PROPERTY_VALUE_TYPE.INTEGER:
    return <TextInput
      label={name}
      type="number"
      onChange={updateProperty.bind({}, code)}
    />;
  case PROPERTY_VALUE_TYPE.DATE:
    return <TextInput label={name}
      type="date"
      onChange={updateProperty.bind({}, code)}
    />;
  case PROPERTY_VALUE_TYPE.STRING:
  default:
    return <TextInput
      label={name}
      onChange={updateProperty.bind({}, code)}
    />;
  }
};
