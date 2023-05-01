import React from 'react';
import { Checkbox } from 'ui/shared/Checkbox';
import { DropdownInput } from 'ui/shared/DropdownInput';
import { TextInput } from 'ui/shared/TextInput';
import { toDropdownList } from 'ui/utils/toDropdownList';

import { IPropertyConfig } from 'domain/edit-config';
import { PROPERTY_VALUE_TYPE } from 'domain/property';

type Props = {
  property: IPropertyConfig;
}
export const MetadataInput = ({ property }: Props) => {
  const { type, name, options } = property;

  switch (type) {
  case PROPERTY_VALUE_TYPE.BOOLEAN:
    return <Checkbox name={name} />;
  case PROPERTY_VALUE_TYPE.LIST:
    return <DropdownInput name={name} list={toDropdownList(options || [])} />;
  case PROPERTY_VALUE_TYPE.INTEGER:
    return <TextInput label={name} type="number" />;
  case PROPERTY_VALUE_TYPE.DATE:
    return <TextInput label={name} type="date" />;
  case PROPERTY_VALUE_TYPE.STRING:
  default:
    return <TextInput label={name} />;
  }
};
