import React from 'react'

import { DateProperty } from 'entities/properties';

import { ParameterPropertyProps } from '../model';

type Props = ParameterPropertyProps<DateProperty>;

export const DatePropertyFields = ({ property, onChange }: Props) => {
  return (
    <div>DateProperty</div>
  )
}
