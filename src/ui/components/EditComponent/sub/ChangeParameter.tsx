import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useComponentsStore } from 'store/componentStore';
import { useParametersStore } from 'store/parameterStore';
import { DropdownInput } from 'ui/shared/DropdownInput';
import { toDropdownList } from 'ui/utils/toDropdownList';

import { ELEMENT_PARAMETER_MAP, IElement } from 'domain/component';

type Props = {
  element: IElement;
};

export const ChangeParameter = ({ element }: Props) => {
  const updateSelectedComponent = useComponentsStore(state => state.updateSelectedComponent);

  const parameters = useParametersStore(state => state.parameters);

  const updateParameter = (paramName: string) => {
    const param = parameters.find(p => p.name === paramName);

    if (!param) {
      return;
    }

    updateSelectedComponent({
      dataSource: paramName,
      as: ELEMENT_PARAMETER_MAP[param.type][0],
    });
  };

  const paramList = parameters.map(p => p.name);

  return (
    <Stack spacing={2}>
      <Typography>Поменять параметр</Typography>
      <DropdownInput
        onChange={updateParameter}
        list={toDropdownList(paramList)}
        name="Параметр"
        value={element.dataSource}
      />
    </Stack>
  );
};
