import React from 'react';

import { IForm } from 'domain/component';

import { FormItemProps } from './types';

export const Form = ({ element, children }: FormItemProps<IForm>) => {
  return (
    <div>{children}</div>
  );
};
