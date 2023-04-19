import React, { useEffect } from "react";

import { StringProperty } from "entities/properties";
import { useFormFields } from "shared/hooks/useFormFields";
import { TextInput } from "shared/ui/TextInput";

import { ParameterPropertyProps } from "../model";

import styles from "./styles.module.scss";

type Props = ParameterPropertyProps<StringProperty>;

export const StringPropertyFields = ({ properties, onChange }: Props) => {
  const [fields, updateField] = useFormFields<StringProperty>(properties || {});

  useEffect(() => {
    onChange(fields);
  }, [fields]);

  return (
    <div className={styles.fieldsWrapper}>
      <TextInput
        label="Маска"
        value={fields.mask}
        onChange={(v) => updateField("mask", v)}
        type="string"
      />
    </div>
  );
};
