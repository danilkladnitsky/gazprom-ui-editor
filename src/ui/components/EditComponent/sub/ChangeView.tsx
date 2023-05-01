import React from 'react';
import { Typography } from '@mui/material';
import { useComponentsStore } from 'store/componentStore';
import { DropdownInput } from 'ui/shared/DropdownInput';
import { toDropdownList } from 'ui/utils/toDropdownList';

import { ELEMENT_TYPE } from 'domain/component';
import { IPropertyConfig } from 'domain/edit-config';
import { CONTROL_TYPE } from 'domain/parameter';

type Props = {
    property: IPropertyConfig;
}

export const ChangeView = ({ property }: Props) => {
  const updateSelectedComponent = useComponentsStore(state => state.updateSelectedComponent);
  const selectedComponent = useComponentsStore(state => state.selectedComponent);
  const { name, options } = property;

  const updateElementView = (view: string) => {
    updateSelectedComponent({ as: view as CONTROL_TYPE });
  };

  const isElement = selectedComponent?.type === ELEMENT_TYPE.ELEMENT;

  return isElement && (
    <div>
      <Typography>{name}</Typography>
      <DropdownInput
        list={toDropdownList(options || [])}
        onChange={updateElementView}
        value={selectedComponent.as}
      />
    </div>
  );
};
