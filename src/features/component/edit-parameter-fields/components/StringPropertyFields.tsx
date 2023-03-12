import React from 'react'

import { StringProperty } from 'entities/properties';
import { ParameterPropertyProps } from '../model';

type Props = ParameterPropertyProps<StringProperty>;

export const StringPropertyFields = ({ property, onChange }: Props) => {
  return (
    <div>StringParameter</div>
  )
}
