import React, { useEffect } from 'react'

import { NumberProperty } from 'entities/properties'

import { ParameterPropertyProps } from '../model'
import { TextInput } from 'shared/ui/TextInput';
import { useFormFields } from 'shared/hooks/useFormFields';

type Props = ParameterPropertyProps<NumberProperty>;

export const NumberPropertyFields = ({ property, onChange }: Props) => {
  const [fields, updateField] = useFormFields<NumberProperty>(property);

  useEffect(() => {
    onChange(fields);
  }, [fields])
  
  return (
    <div>
      <TextInput value={fields.minValue} type="number" onChange={(v) => updateField("minValue", +v)} />
      <TextInput value={fields.maxValue} type="number" onChange={(v) => updateField("maxValue", +v)} />
    </div>
  )
}
