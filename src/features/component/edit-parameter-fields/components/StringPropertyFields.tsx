import React, { useEffect } from 'react'

import { StringProperty } from 'entities/properties';
import { useFormFields } from 'shared/hooks/useFormFields';
import { TextInput } from 'shared/ui/TextInput';
import { Checkbox } from 'shared/ui/Checkbox';

import { ParameterPropertyProps } from '../model';

import styles from "./styles.module.scss";

type Props = ParameterPropertyProps<StringProperty>;

export const StringPropertyFields = ({ property, onChange }: Props) => {
  const [fields, updateField] = useFormFields<StringProperty>(property);


  useEffect(() => {
    onChange(fields);
  }, [fields]);


  return (
    <div className={styles.fieldsWrapper}>
      <Checkbox checked={fields.multiline} onChange={(e) => updateField("multiline", e.target.checked)} />
      <TextInput label="Количество строк"
        value={fields.lineCount}
        onChange={(v) => updateField("lineCount", v)}
        disabled={!fields.multiline}
        type="number"
      />
    </div>
  )
}
