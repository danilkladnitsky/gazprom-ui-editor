import React from 'react'

import { NumberProperty } from 'entities/properties'

import { ParameterPropertyProps } from '../model'
import { TextInput } from 'shared/ui/TextInput';
import { useFormFields } from 'shared/hooks/useFormFields';

type Props = ParameterPropertyProps<NumberProperty>;

export const NumberPropertyFields = ({ property, onChange }: Props) => {
  const [fields, updateField] = useFormFields<NumberProperty>(property);


  return (
    <div>
      <TextInput value={fields.minValue} />
      <TextInput value={fields.maxValue} />
    </div>
  )
}
