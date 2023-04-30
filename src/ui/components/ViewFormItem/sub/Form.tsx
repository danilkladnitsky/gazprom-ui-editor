import React from 'react';

import { IForm } from 'domain/component';

import { ViewFormItemProps } from './types';

export const Form = ({ item, children }: ViewFormItemProps<IForm>) => {
  return (
    <div>
      {item.name}
      {children}
    </div>
  );
};
