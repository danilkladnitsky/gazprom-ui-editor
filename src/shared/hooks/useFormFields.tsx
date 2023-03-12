import React, { useState } from 'react'

type State = Record<string, unknown>;

type UpdatePayload = (fieldName: string, value: unknown) => void;

type ReturnType<T> = [T,UpdatePayload ]

export const useFormFields = <T extends State>(initialState: T): ReturnType<T> => {
    const [fields, setFields] = useState<T>(initialState);

    const updateFields = (fieldName: string, value: unknown) => {
        setFields({
            ...fields,
            [fieldName]: value
        });
    }

    return [fields, updateFields];
}
