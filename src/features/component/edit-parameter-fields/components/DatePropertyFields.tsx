import React, { useEffect } from 'react'

import { DateProperty } from 'entities/properties';

import { useFormFields } from 'shared/hooks/useFormFields';
import { TextInput } from 'shared/ui/TextInput';

import { ParameterPropertyProps } from '../model';

import styles from "./styles.module.scss";

type Props = ParameterPropertyProps<DateProperty>;

export const DatePropertyFields = ({ property, onChange }: Props) => {
  const [fields, updateField] = useFormFields<DateProperty>(property);

  useEffect(() => {
    onChange(fields);
  }, [fields]);
  
  return (
    <div className={styles.fieldsWrapper}>
      <TextInput label="Формат даты" value={fields.dateFormat} type="text" onChange={(v) => updateField("dateFormat", v)} />
    </div>
  )
}
