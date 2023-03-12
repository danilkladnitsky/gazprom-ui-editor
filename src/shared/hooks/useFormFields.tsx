import React, { useState } from 'react'

type State = Record<string, unknown>;

type UpdatePayload<T> = (fieldName: keyof T, value: unknown) => void;

type ReturnType<T> = [T,UpdatePayload<T> ]

export const useFormFields = <T extends State>(initialState: T): ReturnType<T> => {
    const [fields, setFields] = useState<T>(initialState);

    const updateFields = (fieldName: keyof T, value: unknown) => {
        setFields({
            ...fields,
            [fieldName]: value
        });
    }

    return [fields, updateFields];
}
