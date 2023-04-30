import React from 'react';
import { Checkbox } from 'ui/shared/Checkbox';
import { TextInput } from 'ui/shared/TextInput';

import { IPropertyConfig } from 'domain/edit-config';
import { PROPERTY_VALUE_TYPE } from 'domain/property';

type Props = {
  property: IPropertyConfig;
}
export const MetadataInput = ({ property }: Props) => {
  const { type, name } = property;

  switch (type) {
  case PROPERTY_VALUE_TYPE.BOOLEAN:
    return <Checkbox name={name} />;
  case PROPERTY_VALUE_TYPE.INTEGER:
  case PROPERTY_VALUE_TYPE.STRING:
    return <TextInput label={name} />;
  default:
    return <></>;
  }
};
