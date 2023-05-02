import React, { useState } from 'react';
import { Tab as MuiTab, Tabs } from '@mui/material';
import { Stack } from '@mui/system';
import { useComponentsStore } from 'store/componentStore';

import { ELEMENT_TYPE, ITab } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Tab = ({ item, children, onClick }: ViewFormItemProps<ITab>) => {
  const { components, setActivePageIndex } = useComponentsStore();

  const pages = components.filter(c => c.type === ELEMENT_TYPE.PAGE);
  const pageList = pages.map(p => p.name);

  const [activePage, setActivePage] = useState(0);

  const handleClick = () => {
    onClick?.(item);
  };

  const changeTab = (event: React.SyntheticEvent, newValue: number) => {
    setActivePage(newValue);
    setActivePageIndex(newValue);
  };

  return (
    <Stack spacing={2}>
      <Tabs value={activePage} onChange={changeTab} onClick={handleClick}>
        {pageList.map((page, pos) => <MuiTab value={pos} label={page} key={page} />)}
      </Tabs>
      {children}
    </Stack>
  );
};
