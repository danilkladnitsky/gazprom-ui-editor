import React from 'react';
import { useComponentsStore } from 'store/componentStore';
import { TextInput } from 'ui/shared/TextInput';

export const EditName = () => {
  const { selectedComponent, updateSelectedComponent } = useComponentsStore();

  const updateName = (name: string) => {
    updateSelectedComponent({ name });
  };

  return (
    <TextInput
      placeholder="Введите имя компонента"
      value={selectedComponent?.name}
      onChange={updateName}
    />
  );
};
