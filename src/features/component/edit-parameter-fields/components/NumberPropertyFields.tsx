import React, { useEffect } from 'react'

import { NumberProperty } from 'entities/properties'
import { TextInput } from 'shared/ui/TextInput';
import { useFormFields } from 'shared/hooks/useFormFields';

import { ParameterPropertyProps } from '../model'

import styles from "./styles.module.scss";

type Props = ParameterPropertyProps<NumberProperty>;

export const NumberPropertyFields = ({ property, onChange }: Props) => {
  const [fields, updateField] = useFormFields<NumberProperty>(property);

  useEffect(() => {
    onChange(fields);
  }, [fields]);
  
  return (
    <div className={styles.fieldsWrapper}>
      <TextInput value={fields.minValue} label="Минимальное значение" type="number" onChange={(v) => updateField("minValue", +v)} />
      <TextInput value={fields.maxValue} label="Максимальное значение" type="number" onChange={(v) => updateField("maxValue", +v)} />
    </div>
  )
}
